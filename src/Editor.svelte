<script>
  import { getContext, onMount, onDestroy, tick } from 'svelte';
  import { get } from 'svelte/store';
  import Button from '@smui/button';
  import clone from 'just-clone';

  import Error from './Error.svelte';
  import Warning from './Warning.svelte';

  import { components, autoRun } from './stores';

  import {
    DEFAULT_SVELTE_URL,
    DEFAULT_WORKERS_URL,
    NAV_HEIGHT,
  } from './constants';

  import { readJsonFile } from './utils';

  import pilingJs from '../node_modules/piling.js/dist/piling.min';
  import pixiJs from '../node_modules/pixi.js/dist/pixi.min';
  import umapJs from '../node_modules/umap-js/lib/umap-js.min';

  import '../theme/_smui-theme.scss';

  const { open: openModal } = getContext('simple-modal');
  const svelteUrl = 'https://unpkg.com/svelte@latest';

  let data = JSON.parse($components[1].source);
  let init = false;

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
        autoRun: $autoRun,
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
</style>

<svelte:window bind:innerWidth={windowWidth} />
<main
  on:dragenter={dragenterHandler}
  ondragover="return false"
  style="height: calc(100% - {NAV_HEIGHT})">
  {#if dragover}
    <div
      class="dragover-notifier"
      on:dragleave={dragleaveHandler}
      on:drop={dropHandler}>
      Drop it!
    </div>
  {/if}
  <div class="svelte-repl" style="height: 100%" bind:this={container} />
</main>
