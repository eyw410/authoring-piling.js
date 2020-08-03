<script>
  import '../theme/_smui-theme.scss';
  import Button from '@smui/button';

  import clone from 'just-clone';
  import { onMount, onDestroy, tick } from 'svelte';
  import pilingJs from '../node_modules/piling.js/dist/piling.min';
  import pixiJs from '../node_modules/pixi.js/dist/pixi.min';
  import umapJs from '../node_modules/umap-js/lib/umap-js.min';

  import { getContext } from 'svelte';
  import Settings from './Settings.svelte';

  const { open } = getContext('simple-modal');
  
  // import { autoRun } from './store.js';

  let autoRun = false;

  const toggleAuto = () => {
    autoRun = !autoRun;
    open(Settings, { isAuto: autoRun, toggleAuto: toggleAuto });
  }

  function showSettings() {
    open(Settings, { isAuto: autoRun, toggleAuto: toggleAuto });
  }

  $: svelteUrl = `https://unpkg.com/svelte@latest`;

  export let navHeight = '50px';
  export let data = {
    title: 'My Piling.js Project',
    components: [
      {
        type: 'svelte',
        name: 'App',
        source: `<script>
  import { onMount } from 'svelte';

  import itemTransformer from './item-transformer.js';
  import itemRenderer from './item-renderer.js';
  import coverAggregator from './cover-aggregator.js';
  import createPiling from './piling.js';

  const testItems = [
    { src: 'https://storage.googleapis.com/pilingjs/coco-cars/000000253413.jpg' },
    { src: 'https://storage.googleapis.com/pilingjs/coco-cars/000000533739.jpg' },
    { src: 'https://storage.googleapis.com/pilingjs/coco-cars/000000314530.jpg' },
    { src: 'https://storage.googleapis.com/pilingjs/coco-cars/000000418512.jpg' },
    { src: 'https://storage.googleapis.com/pilingjs/coco-cars/000000454273.jpg' },
    { src: 'https://storage.googleapis.com/pilingjs/coco-cars/000000219654.jpg' },
    { src: 'https://storage.googleapis.com/pilingjs/coco-cars/000000558596.jpg' },
    { src: 'https://storage.googleapis.com/pilingjs/coco-cars/000000392493.jpg' },
    { src: 'https://storage.googleapis.com/pilingjs/coco-cars/000000115639.jpg' },
    { src: 'https://storage.googleapis.com/pilingjs/coco-cars/000000228398.jpg' },
  ];

  let domElement;

  onMount(() => {
    const items = testItems.map(itemTransformer);
    createPiling({
      domElement,
      items,
      itemRenderer,
      coverAggregator,
    });
  });
<\/script>

<style>
#pilingjs-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>

<div bind:this={domElement} id="pilingjs-wrapper"></div>`,
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
        name: 'piling',
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
  export let id = 'pickle';
  export let expandedWidth = true;
  let container;
  let repl;
  let windowWidth;
  onMount(async () => {
    let Repl = (await import('./repl')).default;
    repl = new Repl({
      target: container,
      props: {
        id,
        svelteUrl,
        workersUrl: 'workers',
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
  $: ({ title, ...replData } = data);
  $: repl && repl.set(clone(replData));
  $: repl && updateOrientation(windowWidth);

  function reset() {
    repl.update(clone(replData));
  }
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
</style>

<svelte:window bind:innerWidth={windowWidth} />
<main>
  <div class="repl-outer">
    <div class="viewport">
      <div class:w-expanded-95={expandedWidth}>
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
