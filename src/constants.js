export const DEFAULT_AUTORUN = true;

export const DEFAULT_DEBUG = false;

export const DEFAULT_LOADWITHOUTSAVEDPILES = false;

export const NAV_HEIGHT = '48px';

export const STORAGE_KEY = 'authoring-pilingjs';

export const STORAGE_KEY_PILING_STATE = 'authoring-pilingjs-piling-state';

export const DEFAULT_DATA = Array(9)
  .fill()
  .map(() => ({
    src: 'https://storage.googleapis.com/pilingjs/coco-cars/000000253413.jpg',
  }));

export const DEFAULT_COMPONENT_APP = {
  type: 'svelte',
  name: 'App',
  source: `<script>
  import { onDestroy, onMount } from 'svelte';
  import { createLibraryFromState, createLibrary } from 'piling.js';

  import getData from './data.js';
  import * as importedRenderers from './renderers.js';
  import * as importedAggregators from './aggregators.js';
  import * as importedStyles from './styles.js';
  import * as importedGroupArrange from './group-arrange.js';

  import localData from './data.json';

  const isFunction = f => !!(f && f.constructor && f.call && f.apply);

  let domElement;
  let piling;
  let hasInitialized = false;

  onMount(async () => {
    let items;
    try {
      items = (getData || identity)(localData);
      console.log('items', items);
    } catch (e) {
      // Either getData() is broken or it's actually a functional component
    }

    if (items === undefined || isFunction(items)) {
      items = getData({ domElement })(localData);
    }

    items = await Promise.resolve(items);

    const renderers = importedRenderers.default && isFunction(importedRenderers.default)
      ? importedRenderers.default({ domElement })
      : importedRenderers;
    const itemRenderer = renderers.itemRenderer;
    const coverRenderer = renderers.coverRenderer || null;
    const previewRenderer = renderers.previewRenderer || null;

    const aggregators = importedAggregators.default && isFunction(importedAggregators.default)
      ? importedAggregators.default({ domElement })
      : importedAggregators;
    const coverAggregator = aggregators.coverAggregator || null;
    const previewAggregator = aggregators.previewAggregator || null;

    const styles = importedStyles.default && isFunction(importedStyles.default)
      ? importedStyles.default({ domElement })
      : importedStyles.default || {};

    const prevState = JSON.parse(sessionStorage.getItem("${STORAGE_KEY_PILING_STATE}"));

    const initProps = {
      itemRenderer,
      coverRenderer,
      previewRenderer,
      coverAggregator,
      previewAggregator,
      ...styles
    };
    const settings = JSON.parse(sessionStorage.getItem("${STORAGE_KEY}"));
    const debug = settings ? settings.debug === 'true' : false;
    const loadWithoutSavedPiles = settings ? settings.loadWithoutSavedPiles === 'true' : false;
    
    if (prevState && !debug && !loadWithoutSavedPiles) {
			piling = await createLibraryFromState(domElement, {
				...prevState,
				...initProps,
      });
      piling.set('items', items);
    } else {
      console.log('items', items);
      piling = createLibrary(domElement, { ...initProps, items });
      if (loadWithoutSavedPiles) {
        sessionStorage.setItem("${STORAGE_KEY}", { ...settings, loadWithoutSavedPiles: false })
      }
    }

    const groupArrange = importedGroupArrange.default && isFunction(importedGroupArrange.default)
      ? importedGroupArrange.default({ domElement, piling })
      : importedGroupArrange || [];

    // Future: extend the sidebar using groupArrange
  });

  onDestroy(() => {
    const settings = JSON.parse(sessionStorage.getItem("${STORAGE_KEY}"));
    const loadWithoutSavedPiles = settings ? settings.loadWithoutSavedPiles === 'true' : false;
    console.log('load without saved piles is ', loadWithoutSavedPiles);
    if (piling) {
      sessionStorage.setItem("${STORAGE_KEY_PILING_STATE}", JSON.stringify(piling.exportState()));
      piling.destroy();
    }
  });
</script>

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
};

export const DEFAULT_COMPONENT_DATA_JSON = {
  type: 'json',
  name: 'data',
  source: JSON.stringify(DEFAULT_DATA, null, 2),
};

export const DEFAULT_COMPONENT_DATA_JS = {
  type: 'js',
  name: 'data',
  source: `export default function data(localData) {
  return localData;
}`,
};

export const DEFAULT_COMPONENT_RENDERERS = {
  type: 'js',
  name: 'renderers',
  source: `import { createImageRenderer } from 'piling.js'

const itemRenderer = createImageRenderer();

export { itemRenderer }`,
};

export const DEFAULT_COMPONENT_AGGREGATORS = {
  type: 'js',
  name: 'aggregators',
  source: `// Select the median item
const coverAggregator = (items) => items[Math.round(items.length / 2)].src;

export { coverAggregator }`,
};

export const DEFAULT_COMPONENT_STYLES = {
  type: 'js',
  name: 'styles',
  source: `const styles = {
  columns: 3
};

export default styles;`,
};

export const DEFAULT_COMPONENT_GROUP_ARRANGE = {
  type: 'js',
  name: 'group-arrange',
  source: `export default function groupArrange({
    domElement, piling
  }) {
  // Adjust the grouping and arrangement via
  // piling.groupBy() and piling.arrangeBy()
}`,
};

export const DEFAULT_COMPONENTS = [
  DEFAULT_COMPONENT_APP,
  DEFAULT_COMPONENT_DATA_JSON,
  DEFAULT_COMPONENT_DATA_JS,
  DEFAULT_COMPONENT_RENDERERS,
  DEFAULT_COMPONENT_AGGREGATORS,
  DEFAULT_COMPONENT_STYLES,
  DEFAULT_COMPONENT_GROUP_ARRANGE,
];

export const DEFAULT_DATA_NAME = 'data';
export const DEFAULT_DATA_TYPE = 'json';

export const DEFAULT_COMPONENTS_NAMED = {
  'App.svelte': DEFAULT_COMPONENT_APP,
  'data.json': DEFAULT_COMPONENT_DATA_JSON,
  'data.js': DEFAULT_COMPONENT_DATA_JS,
  'renderers.js': DEFAULT_COMPONENT_RENDERERS,
  'aggregators.js': DEFAULT_COMPONENT_AGGREGATORS,
  'styles.js': DEFAULT_COMPONENT_STYLES,
  'group-arrange.js': DEFAULT_COMPONENT_GROUP_ARRANGE,
};

export const DATA_JSON_INDEX = Object.keys(DEFAULT_COMPONENTS_NAMED).indexOf(
  'data.json'
);

export const INTERMEDIATE_DATA_APP = {
  type: 'svelte',
  name: 'App',
  source: `<script>
  import { onMount } from 'svelte';
  import localData from './data.json';
  import importedGetData from './data.js';

  let domElement;
  let whenItems = new Promise();

  onMount(async () => {
    const itemsOrGetData = await Promise.resolve((importedGetData || identity)(localData));
    whenItems = Promise.resolve(
      isFunction(itemsOrGetData)
        ? importedGetData({ domElement })(localData)
        : itemsOrGetData
    );
  });
</script>

<style>
  .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .data {
    white-space: pre-wrap;
    word-break: break-all
  }
</style>

<div class="wrapper" bind:this={domElement}>
  {#await whenItems}
    <p>Loading...</p>
  {:then items}
    <pre class='data'>{JSON.stringify(items, null, 2)}</pre>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</div>`,
};

export const INTERMEDIATE_RENDERER_APP = {
  type: 'svelte',
  name: 'App',
  source: `<script>
  import { onMount } from 'svelte';
  import localData from './data.json';
  import importedGetData from './data.js';
  import * as renderers from './renderers.js';

  let domElement;
  let itemRenderer;
  let whenItems = new Promise();

  onMount(async () => {
    const renderers = importedRenderers.default && isFunction(importedRenderers.default)
      ? importedRenderers.default({ domElement })
      : importedRenderers;
    itemRenderer = renderers.itemRenderer;

    const itemsOrGetData = await Promise.resolve((importedGetData || identity)(localData));
    whenItems = Promise.resolve(
      isFunction(itemsOrGetData)
        ? importedGetData({ domElement })(localData)
        : itemsOrGetData
    );
  });
</script>

{#await whenItems}
  <p>Loading...</p>
{:then items}
  {#await Promise.resolve(itemRenderer(items.map(({ src }) => src)))}
    <p>Loading...</p>
  {:then images}
    {#each images as image}
      <img src={image.src} alt="item" />
    {/each}
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}`,
};

export const INTERMEDIATE_APP_MAP = {
  'data.js': INTERMEDIATE_DATA_APP,
  'renderers.js': INTERMEDIATE_RENDERER_APP,
};

export const DEFAULT_SVELTE_URL = 'https://unpkg.com/svelte@latest';

export const DEFAULT_WORKERS_URL = 'workers';

export const STORAGE_SAVE_DEBOUNCE = 1000; // 1 second
