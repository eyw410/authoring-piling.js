<script>
  import { getContext, onMount, onDestroy, tick } from 'svelte';
  import { get } from 'svelte/store';
  import Button from '@smui/button';
  import clone from 'just-clone';
  import Papa from 'papaparse';

  import Error from './Error.svelte';
  import Warning from './Warning.svelte';

  import { debug, tabId, components, prevPilingState } from './stores';

  import {
    DEFAULT_SVELTE_URL,
    DEFAULT_WORKERS_URL,
    NAV_HEIGHT,
  } from './constants';

  import { readJsonFile } from './utils';

  import pilingJs from '../node_modules/piling.js/dist/piling.min';
  import pixiJs from '../node_modules/pixi.js/dist/pixi.min';
  import umapJs from '../node_modules/umap-js/lib/umap-js.min';

  import Import from './Import.svelte';

  const { open: openModal } = getContext('simple-modal');
  const svelteUrl = 'https://unpkg.com/svelte@latest';

  let data = JSON.parse($components[1].source || '[]');
  let init = false;

  let sources = {
    title: 'My Piling.js Project',
    components: $components,
  };

  let container;
  let repl;
  let bc;
  export const rebundle = () => {
    if (repl && repl.rebundle) repl.rebundle();
  };
  export const refresh = () => {
    if (repl) repl.refresh();
  };
  let windowWidth;

  const openLoadDataModal = () => {
    openModal(Import, { refreshHandler: refresh }, {});
  };

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
        openLoadDataModal,
      },
    });

    // check for tab ID
    if (!$tabId) console.log('somehow no tab id?');
    bc = new BroadcastChannel($tabId);
    bc.onmessage = function (m) {
      const { type, payload } = m.data;
      switch (type) {
        case "update":
          if (!$debug) prevPilingState.update(() => payload);
          break;
        }
     }
  });

  onDestroy(() => {
    if (repl) {
      repl.$destroy();
    }
    bc.close();
  });

  async function updateOrientation(w) {
    // Occasionally the REPL gets a bit screwed up if we set orientation while it's still
    // intializing, so wait a tick.
    await tick();
    repl.$set({ orientation: w > 600 ? 'columns' : 'rows' });
  }

  $: ({ title, ...replData } = sources);
  $: repl && updateOrientation(windowWidth);
  $: repl && repl.refresh();
  $: if (repl && data) {
    components.update((_components) => {
      _components[1].source = JSON.stringify(data, null, 2);
      return _components;
    });
    // Manually rebundle + reload the editor text
    repl.refresh();
  }
  $: components && repl && repl.refresh();

  function reset() {
    repl.update(clone(replData));
  }
</script>

<style>
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<svelte:window bind:innerWidth={windowWidth} />
<main style="height: calc(100% - {NAV_HEIGHT})">
  <div class="svelte-repl" style="height: 100%" bind:this={container} />
</main>
