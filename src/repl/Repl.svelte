<script>
  import { setContext, getContext, createEventDispatcher } from 'svelte';
  import { writable } from 'svelte/store';
  import SplitPane from './SplitPane.svelte';
  import ComponentSelector from './Input/ComponentSelector.svelte';
  import ModuleEditor from './Input/ModuleEditor.svelte';
  import Output from './Output/index.svelte';
  import Bundler from './Bundler.js';
  import { is_browser } from './env.js';
  import PaneWithPanel from './Output/PaneWithPanel.svelte';
  import CodeMirror from './CodeMirror.svelte';
  import { spring } from 'svelte/motion';

  import { components, selectedComponent as selected, jsonDataComponent } from '../stores.js';

  import { DEFAULT_DATA_NAME } from '../constants.js';

  export let workersUrl;
  export let packagesUrl = 'https://unpkg.com';
  export let svelteUrl = `${packagesUrl}/svelte`;
  export let embedded = false;
  export let orientation = 'columns';
  export let relaxed = false;
  export let fixed = false;
  export let fixedPos = 50;
  export let injectedJS = '';
  export let injectedCSS = '';

  const topEditorHistoryMap = new Map();
  const historyMap = new Map();

  export function toJSON() {
    return {
      imports: $bundle && $bundle.imports,
      components: $components,
    };
  }

  export async function refresh() {
    rebundle();

    await module_editor_ready;
    await output_ready;

    await module_editor.set($selected.source, $selected.type);
    output.set($selected, $compile_options);

    historyMap.clear();
    module_editor.clearHistory();

    initTop();
  }

  async function initTop() {
    await whenDataEditorReady;

    await dataEditor.set($jsonDataComponent.source, $jsonDataComponent.type);
    output.set($jsonDataComponent, $compile_options);

    dataEditor.clearHistory();
  }

  // export function update(data) {
  //   const { name, type } = $selected || {};

  //   components.set(data.components);

  //   const matched_component = data.components.find(
  //     (file) => file.name === name && file.type === type
  //   );
  //   selected.set(matched_component || data.components[0]);

  //   injectedCSS = data.css || '';

  //   if (matched_component) {
  //     module_editor.update(matched_component.source);
  //     output.update(matched_component, $compile_options);
  //   } else {
  //     module_editor.set(matched_component.source, matched_component.type);
  //     output.set(matched_component, $compile_options);

  //     module_editor.clearHistory();
  //   }
  // }

  if (!workersUrl) {
    throw new Error(`You must supply workersUrl prop to <Repl>`);
  }

  const dispatch = createEventDispatcher();

  const bundle = writable(null);
  const compile_options = writable({
    generate: 'dom',
    dev: false,
    css: false,
    hydratable: false,
    customElement: false,
    immutable: false,
    legacy: false,
  });

  let module_editor;
  let output;

  let current_token;
  export async function rebundle() {
    const token = (current_token = {});
    const result = await bundler.bundle($components);
    if (result && token === current_token) bundle.set(result);
  }

  // TODO this is a horrible kludge, written in a panic. fix it
  let fulfil_module_editor_ready;
  let module_editor_ready = new Promise(
    (f) => (fulfil_module_editor_ready = f)
  );

  let fulfillDataEditorReady;
  let whenDataEditorReady = new Promise(
    (f) => (fulfillDataEditorReady = f)
  );

  let fulfil_output_ready;
  let output_ready = new Promise((f) => (fulfil_output_ready = f));

  function splitName(fileName) {
    const match = /^(.+)\.(\w+)$/.exec(fileName);
    if (!match) return; // ???
    return match;
  }

  setContext('REPL', {
    components,
    selected,
    bundle,
    compile_options,

    rebundle,

    navigate: (item) => {
      const [, name, type] = splitName(item.fileName);
      const component = $components.find(
        (c) => c.name === name && c.type === type
      );
      handle_select(component);

      // TODO select the line/column in question
    },

    handle_change: (event) => {
      selected.update((component) => {
        // TODO this is a bit hacky — we're relying on mutability
        // so that updating components works... might be better
        // if a) components had unique IDs, b) we tracked selected
        // *index* rather than component, and c) `selected` was
        // derived from `components` and `index`
        component.source = event.detail.value;
        return component;
      });

      components.update((c) => c);

      // recompile selected component
      output.update($selected, $compile_options);

      rebundle();

      dispatch('change', {
        components: $components,
      });
    },

    handle_data_change: (event) => {
      jsonDataComponent.update((component) => {
        // TODO this is a bit hacky — we're relying on mutability
        // so that updating components works... might be better
        // if a) components had unique IDs, b) we tracked selected
        // *index* rather than component, and c) `selected` was
        // derived from `components` and `index`
        component.source = event.detail.value;
        return component;
      });

      components.update((c) => c);

      // recompile selected component
      output.update($jsonDataComponent, $compile_options);

      rebundle();

      dispatch('change', {
        components: $components,
      });
    },

    register_module_editor(editor) {
      module_editor = editor;
      fulfil_module_editor_ready();
    },

    register_output(handlers) {
      output = handlers;
      fulfil_output_ready();
    },

    request_focus() {
      module_editor.focus();
    },
  });

  const { handle_data_change } = getContext('REPL');

  const handle_select_historyMap = (historyMap, component) => {
    historyMap.set(get_component_name($selected), module_editor.getHistory());
    selected.set(component);
    module_editor.set(component.source, component.type);
    if (historyMap.has(get_component_name($selected))) {
      module_editor.setHistory(historyMap.get(get_component_name($selected)));
    } else {
      module_editor.clearHistory();
    }
    output.set($selected, $compile_options);
  }

  function handle_select(component) {
    handle_select_historyMap(historyMap, component);
  }

  function get_component_name(component) {
    return `${component.name}.${component.type}`;
  }

  function getComponentByName(fileName) {
    const [, name, type] = splitName(fileName);
    return $components.find(
      (c) => c.name === name && c.type === type
    );
  }

  let dataEditor;

  let input;
  let sourceErrorLoc;
  let runtimeErrorLoc; // TODO refactor this stuff — runtimeErrorLoc is unused
  let status = null;
  const bundler =
    is_browser &&
    new Bundler({
      workersUrl,
      packagesUrl,
      svelteUrl,
      onstatus: (message) => {
        status = message;
      },
    });

  $: if (output && $selected) {
    output.update($selected, $compile_options);
  }

  let pos = 50;
  let previous_pos = 50;

  const driver = spring(pos);
  $: pos = $driver;

  const toggleTop = () => {
    driver.set(pos, { hard: true });

    if (pos < 20) {
      driver.set(previous_pos);
    } else {
      previous_pos = pos;
      driver.set(0);
    }
  }
</script>

<style>
  .container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .container :global(section) {
    position: relative;
    padding: 42px 0 0 0;
    height: 100%;
    box-sizing: border-box;
  }

  .container :global(section) > :global(*):first-child {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 42px;
    box-sizing: border-box;
  }

  .container :global(section) > :global(*):last-child {
    width: 100%;
    height: 100%;
  }

  .container :global(.editor-wrapper) {
    height: 100%;
  }

  .container .editor-wrapper {
    background: var(--back-light);
  }

  .container .panel-header {
    height: 42px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5em;
    cursor: pointer;
  }

  .container h3 {
    font: 700 12px/1.5 var(--font);
    color: #333;
  }
</style>

<div class="container" class:orientation>
  <SplitPane
    type={orientation === 'rows' ? 'vertical' : 'horizontal'}
    pos={fixed ? fixedPos : orientation === 'rows' ? 50 : 60}
    {fixed}>
    <section slot="a">
      <ComponentSelector {handle_select} handle_data_select={initTop} />
      <PaneWithPanel bind:pos panel={$selected.name === DEFAULT_DATA_NAME ? 'Data Transformer' : "Custom Code"}>
        <div slot="main">
          <div class="panel-header" on:click={toggleTop}>
            <h3>{$selected.name === DEFAULT_DATA_NAME ? 'Raw Data' : "Options"}</h3>
          </div>
          {#if $selected.name === DEFAULT_DATA_NAME}
          <div class="editor-wrapper">
            <CodeMirror bind:this={dataEditor} errorLoc={sourceErrorLoc || runtimeErrorLoc} on:change={handle_data_change} on:mount={fulfillDataEditorReady} />
          </div>
          {:else}
          buttons here
          {/if}
        </div>

        <div slot="panel-body" style="display: flex; height: 100%;">
          <ModuleEditor
            bind:this={input}
            errorLoc={sourceErrorLoc || runtimeErrorLoc} />
        </div>
      </PaneWithPanel>
    </section>

    <section slot="b" style="height: 100%;">
      <Output
        {svelteUrl}
        {workersUrl}
        {status}
        {embedded}
        {relaxed}
        {injectedJS}
        {injectedCSS} />
    </section>
  </SplitPane>
</div>
