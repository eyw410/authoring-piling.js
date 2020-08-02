<script>
  import { getContext, onMount, onDestroy, tick } from 'svelte';
  import Button from '@smui/button';
  import clone from 'just-clone';

  import Error from './Error.svelte';
  import Warning from './Warning.svelte';

  import {
    DEFAULT_DATA,
    DEAULFT_REPL_ID,
    DEAULFT_SVELTE_URL,
    DEAULFT_WORKERS_URL,
  } from './constants';

  import { readJsonFile } from './utils';

  import pilingJs from '../node_modules/piling.js/dist/piling.min';
  import pixiJs from '../node_modules/pixi.js/dist/pixi.min';
  import umapJs from '../node_modules/umap-js/lib/umap-js.min';

  import '../theme/_smui-theme.scss';

  const { open: openModal } = getContext('simple-modal');
  const svelteUrl = 'https://unpkg.com/svelte@latest';

  let data = DEFAULT_DATA;
  let init = false;

  let height = '100%';
  let sources = {
    title: 'My Piling.js Project',
    components: [
      {
        type: 'svelte',
        name: 'App',
        source: `<script>
  import { onMount } from 'svelte';

  import dataFetcher from './data-fetcher.js';
  import itemTransformer from './item-transformer.js';
  import itemRenderer from './item-renderer.js';
  import coverAggregator from './cover-aggregator.js';
  import createPiling from './piling-creator.js';

  let domElement;

  onMount(async () => {
    const data = await Promise.resolve(dataFetcher());
    const items = data.map(itemTransformer);
    createPiling({
      domElement,
      items,
      itemRenderer,
      coverAggregator,
    });
  });
<\/script><style ✂prettier:content✂="CiNwaWxpbmdqcy13cmFwcGVyIHsKICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgdG9wOiAwOwogIGxlZnQ6IDA7CiAgcmlnaHQ6IDA7CiAgYm90dG9tOiAwOwp9Cg=="></style><div bind:this={domElement} id="pilingjs-wrapper"></div>`,
      },
      {
        type: 'json',
        name: 'data',
        source: JSON.stringify(data, null, 4),
      },
      {
        type: 'js',
        name: 'data-fetcher',
        source: `// Data fetcher
import data from './data.json';

const fetcher = () => data

export default fetcher;`,
      },
      {
        type: 'js',
        name: 'item-transformer',
        source: `// Item transformer

const transformer = (item) => {
  return item;
}

export default transformer;`,
      },
      {
        type: 'js',
        name: 'item-renderer',
        source: `// Item renderer
import { createImageRenderer } from 'piling.js'

const renderer = createImageRenderer();

export default renderer;`,
      },
      {
        type: 'js',
        name: 'cover-aggregator',
        source: `// Pile cover aggregator

// Pick the element in the middle
const aggregator = async (items) => items[Math.round(items.length / 2)].src;

export default aggregator;`,
      },
      {
        type: 'js',
        name: 'piling-creator',
        source: `// Piling.js view specification
import createPilingJs from 'piling.js';

const createPiling = ({
  domElement,
  items,
  itemRenderer,
  coverAggregator
} = {}) => createPilingJs(domElement, {
  items,
  itemRenderer,
  coverAggregator
});

export default createPiling;`,
      },
    ],
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
        id: DEAULFT_REPL_ID,
        svelteUrl: DEAULFT_SVELTE_URL,
        workersUrl: DEAULFT_WORKERS_URL,
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
  $: if (repl) {
    if (init) {
      // update() preserves the currently selected tab
      repl.update(clone(replData));
    } else {
      repl.set(clone(replData));
      init = true;
    }
  }
  $: if (repl && data) {
    const components = [...repl.toJSON().components];
    if (components.length === sources.components.length) {
      components[1].source = JSON.stringify(data, null, 2);
      sources.components = components;
    }
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
            class="svelte-repl"
            style="height:{height};"
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
