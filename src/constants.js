export const DEFAULT_AUTORUN = true;

export const NAV_HEIGHT = '48px';

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
  import createPilingJs from 'piling.js';

  import getData from './data.js';
  import * as renderers from './renderers.js';
  import * as aggregators from './aggregators.js';
  import viewSpec from './view-spec.js';
  import localData from './local-data.json';

  const itemRenderer = renderers.itemRenderer || renderers.default;
  const coverRenderer = renderers.coverRenderer || null;
  const previewRenderer = renderers.previewRenderer || null;

  const coverAggregator = renderers.coverAggregator || null;
  const previewAggregator = renderers.previewAggregator || null;

  let domElement;
  let piling

  onMount(async () => {
    const items = await Promise.resolve(getData(localData));
    piling = createPilingJs(
      domElement,
      {
        items,
        itemRenderer,
        coverRenderer,
        previewRenderer,
        coverAggregator,
        previewAggregator,
        ...viewSpec
      }
    );
  });

  onDestroy(() => {
    if (piling) piling.destroy();
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

export const DEFAULT_COMPONENT_LOCAL_DATA = {
  type: 'json',
  name: 'local-data',
  source: JSON.stringify(DEFAULT_DATA, null, 2),
};

export const DEFAULT_COMPONENT_DATA = {
  type: 'js',
  name: 'data',
  source: `/* Load and wrangle the data in this file */

const getData = (localData) => localData;

export default getData;`,
};

export const DEFAULT_COMPONENT_RENDERERS = {
  type: 'js',
  name: 'renderers',
  source: `/* Define the item, cover, and preview renderer */
import { createImageRenderer } from 'piling.js'

const itemRenderer = createImageRenderer();

export {
  itemRenderer,
  // Optionally
  // coverRenderer,
  // itemRenderer
}`,
};

export const DEFAULT_COMPONENT_AGGREGATORS = {
  type: 'js',
  name: 'aggregators',
  source: `/* Implement the pile cover and preview aggregators */

// Pick the median
const coverAggregator = (items) => items[Math.round(items.length / 2)].src;

// Both exports are optional
export {
  coverAggregator,
  // or:
  // previewAggregator
}`,
};

export const DEFAULT_COMPONENT_VIEW_SPEC = {
  type: 'js',
  name: 'view-spec',
  source: `/* Define the Piling.js view specification */

const viewSpec = {
  columns: 3
};

export default viewSpec;`,
};

export const DEFAULT_COMPONENTS = [
  DEFAULT_COMPONENT_APP,
  DEFAULT_COMPONENT_LOCAL_DATA,
  DEFAULT_COMPONENT_DATA,
  DEFAULT_COMPONENT_RENDERERS,
  DEFAULT_COMPONENT_AGGREGATORS,
  DEFAULT_COMPONENT_VIEW_SPEC,
];

export const DEFAULT_SVELTE_URL = 'https://unpkg.com/svelte@latest';

export const DEFAULT_WORKERS_URL = 'workers';

export const STORAGE_KEY = 'authoring-pilingjs';

export const STORAGE_SAVE_DEBOUNCE = 1000; // 1 second
