<script>
  import { getContext, onMount, onDestroy, tick } from 'svelte';
  import { get } from 'svelte/store';
  import Button from '@smui/button';
  import clone from 'just-clone';

  import Error from './Error.svelte';
  import Warning from './Warning.svelte';

  import { components, settings } from './stores';

  import {
    DEFAULT_COMPONENTS,
    DEFAULT_SVELTE_URL,
    DEFAULT_WORKERS_URL,
  } from './constants';

  import { readJsonFile } from './utils';

  import pilingJs from '../node_modules/piling.js/dist/piling.min';
  import pixiJs from '../node_modules/pixi.js/dist/pixi.min';
  import umapJs from '../node_modules/umap-js/lib/umap-js.min';

  import '../theme/_smui-theme.scss';

  import Settings from './Settings.svelte';

  const { open: openModal } = getContext('simple-modal');
  const svelteUrl = 'https://unpkg.com/svelte@latest';

  // Settings Modal
  const toggleAuto = () => {
    settings.update((curr) => {return {autoRun: !curr.autoRun}});
  }

  function showSettings() {
    openModal(Settings, { settings: settings, toggleAuto: toggleAuto });
  }

  let data = JSON.parse($components[1].source);
  let init = false;

  let height = '100%';
  let navHeight = '50px';

  let sources = {
    title: 'My Piling.js Project',
    components: $components,
  };

  let container;
  let repl;
  let windowWidth;

  onMount(async () => {
    // eslint-ignore-next-line
    let Repl = (await import('./repl')).default;
    repl = new Repl({
      target: container,
      props: {
        svelteUrl: DEFAULT_SVELTE_URL,
        workersUrl: DEFAULT_WORKERS_URL,
        orientation: windowWidth > 600 ? 'columns' : 'rows',
        injectedJS: [
          `(function(){${pixiJs.replace(
            '//# sourceMappingURL=pixi.min.js.map',
            ''
          )};\nPIXI.utils.skipHello();\nwindow.PIXI=PIXI;})();`,
          `(function(){${umapJs};})();`,
          `(function(){${pilingJs};})();`,
        ].join('\n'),
      },
    });
  });

  onDestroy(() => {
    if (repl) {
      repl.$destroy();
    }
  });

  async function updateOrientation(w) {
    // Occasionally the REPL gets a bit screwed up if we set orientation while it's still
    // intializing, so wait a tick.
    await tick();
    repl.$set({ orientation: w > 600 ? 'columns' : 'rows' });
  }

  $: ({ title, ...replData } = sources);
  $: repl && updateOrientation(windowWidth);
  $: repl && repl.init();
  $: if (repl && data) {
    components.update((_components) => {
      _components[1].source = JSON.stringify(data, null, 2);
      return _components;
    });
    // We need to manually rebundle as subscribing to `components` would cause
    // doublicated bundling
    repl.rebundle();
  }

  function reset() {
    repl.update(clone(replData));
  }

  let dragover = false;

  const dragenterHandler = () => {
    dragover = true;
  };

  const dragleaveHandler = async () => {
    dragover = false;
  };

  const dropHandler = (event) => {
    event.preventDefault();

    dragover = false;

    if (event.dataTransfer.files.length) {
      switch (event.dataTransfer.files[0].type) {
        case 'application/json':
          readJsonFile(event.dataTransfer.files[0])
            .then((newData) => {
              data = newData;
            })
            .catch((error) => {
              openModal(Error, { message: 'Invalid JSON file' });
            });
          break;

        default:
          openModal(Warning, { message: 'Unsupported file type!' });
          break;
      }
    } else {
      openModal(Warning, { message: 'Only drop files!' });
    }
  };
</script>

<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  .dragover-notifier {
    position: absolute;
    z-index: 10;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(240, 240, 240, 0.95);
  }

  .repl-outer {
    background-color: #fff;
    --font: 'Inter', 'Open Sans', 'Helvetica', 'Verdana', sans-serif;
    --font-mono: 'Inconsolata', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono',
      'Courier New', monospace;
    --prime: rgb(3, 102, 114);
    --second: #676778;
    --back-light: #f6fafd;
  }

  body {
    padding: 0;
  }

  .bar {
    width: 100%;
    background-color: #555;
    overflow: auto;
  }

  /* action labels */
  .bar span {
    float: left;
    text-align: center;
    color: white;
    text-decoration: none;
    font-size: 17px;
    height: 100%;
  }

  .bar .bar-item {
    background-color: transparent;
    width: 100%;
    height: 100%;
    margin: 0;
    border-radius: 0;
    border: none;
    color: #bfbfbf;
  }

  .bar span:hover {
    background-color: #000;
  }

  /* Add responsiveness - will automatically display the navbar vertically instead of horizontally on screens less than 500 pixels */
  @media screen and (max-width: 500px) {
    .bar span {
      float: none;
      display: block;
    }
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<svelte:window bind:innerWidth={windowWidth} />
<main on:dragenter={dragenterHandler} ondragover="return false">
  {#if dragover}
    <div
      class="dragover-notifier"
      on:dragleave={dragleaveHandler}
      on:drop={dropHandler}>
      Drop it!
    </div>
  {/if}
  <div class="repl-outer">
    <div class="viewport">
      <div class="w-expanded-95">
        <div
          class="flex flex-col font-sans border border-gray-100 shadow-md
          rounded-lg"
          style="height: 100vh">
          <div
            class="bar"
            style="height: {navHeight};">
            <span>
              <button
                class="bar-item"
                type="button"
                on:click={() => {alert("Not implemented")}}>
                Run
              </button>
            </span>
            <span>
              <button
                class="bar-item"
                type="button"
                on:click={reset}>
                Reset
              </button>
            </span>
            <span>
              <button
                class="bar-item"
                type="button"
                on:click={() => {alert("Not implemented")}}>
                Import
              </button>
            </span>
            <span>
              <button
                class="bar-item"
                type="button"
                on:click={() => {alert("Not implemented")}}>
                Export
              </button>
            </span>
            <span>
              <button
                class="bar-item"
                type="button"
                on:click={showSettings}>
                Settings
              </button>
            </span>
          </div>
          <div
            class="svelte-repl"
            style="height: calc(100% - {navHeight})"
            bind:this={container} />
        </div>
      </div>
    </div>
  </div>
</main>
<!--
	.repl-outer {
	  background-color: #fff;
	  --font: "Inter", "Open Sans", "Helvetica", "Verdana", sans-serif;
	  --font-mono: "Inconsolata", "Menlo", "Monaco", "Consolas", "Liberation Mono",
	    "Courier New", monospace;
	  --prime: rgb(3, 102, 114);
	  --second: #676778;
	  --back-light: #f6fafd;
	}
</style>
-->
