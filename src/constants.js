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
  import style from './style.js';
  import localData from './data.json';

  const itemRenderer = renderers.itemRenderer || renderers.default;
  const coverRenderer = renderers.coverRenderer || null;
  const previewRenderer = renderers.previewRenderer || null;

  const coverAggregator = renderers.coverAggregator || null;
  const previewAggregator = renderers.previewAggregator || null;

  let domElement;
  let piling;
	let hasLoaded = false;

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
        ...style
      }
    );
		piling.subscribe('itemUpdate', () => {
      const savedState = sessionStorage.getItem("state");
      hasLoaded = true;
			if (!savedState) return;
			const stateObj = JSON.parse(sessionStorage.getItem("state"));
			piling.importState({
				...stateObj,
				items,
				itemRenderer,
				coverRenderer,
				previewRenderer,
				coverAggregator,
				previewAggregator,
				...style
			});
		}, 1);
  });

  onDestroy(() => {
		if (piling && hasLoaded) sessionStorage.setItem("state", JSON.stringify(piling.exportState()));
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

export const DEFAULT_COMPONENT_DATA_JSON = {
  type: 'json',
  name: 'data',
  source: JSON.stringify(DEFAULT_DATA, null, 2),
};

export const DEFAULT_COMPONENT_DATA_JS = {
  type: 'js',
  name: 'data',
  source: `/* Load and wrangle the data in this file */

const getData = (localData) => localData.map(el => ({"src": "https://upload.wikimedia.org/wikipedia/en/2/2d/SSU_Kirby_artwork.png" }));

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
  // Optionally define:
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

export const DEFAULT_COMPONENT_STYLE = {
  type: 'js',
  name: 'style',
  source: `/* Define the Piling.js view specification */

const style = {
  columns: 3
};

export default style;`,
};

export const DEFAULT_COMPONENTS = [
  DEFAULT_COMPONENT_APP,
  DEFAULT_COMPONENT_DATA_JSON,
  DEFAULT_COMPONENT_DATA_JS,
  DEFAULT_COMPONENT_RENDERERS,
  DEFAULT_COMPONENT_AGGREGATORS,
  DEFAULT_COMPONENT_STYLE,
];

export const DEFAULT_DATA_NAME = 'data';
export const DEFAULT_DATA_TYPE = 'json';

export const DEFAULT_COMPONENTS_NAMED = {
  'App.svelte': DEFAULT_COMPONENT_APP,
  'data.json': DEFAULT_COMPONENT_DATA_JSON,
  'data.js': DEFAULT_COMPONENT_DATA_JS,
  'renderers.js': DEFAULT_COMPONENT_RENDERERS,
  'aggregators.js': DEFAULT_COMPONENT_AGGREGATORS,
  'style.js': DEFAULT_COMPONENT_STYLE,
};

export const DATA_JSON_INDEX = Object.keys(DEFAULT_COMPONENTS_NAMED).indexOf('data.json')

export const INTERMEDIATE_DATA_APP = {
  type: 'svelte',
  name: 'App',
  source: `<script>
  import localData from './data.json';
	import getData from './data.js';
	
	const whenItems = Promise.resolve(getData(localData));
</script>

<style>
	pre.data {
		white-space: pre-wrap;
		word-break: break-all
	}
</style>

{#await whenItems}
  <p>Loading...</p>
{:then items}
	<pre class='data'>{JSON.stringify(items, null, 2)}</pre>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}`
}

export const INTERMEDIATE_RENDERER_APP = {
  type: 'svelte',
  name: 'App',
  source: `<script>
  import localData from './data.json';
	import getData from './data.js';
	import * as renderers from './renderers.js'
	
	const whenItems = Promise.resolve(getData(localData));
	const itemRenderer = renderers.itemRenderer || renderers.default;
</script>

<div id='images' />

{#await whenItems}
<p>Loading...</p>
{:then items}
{#await Promise.resolve(itemRenderer(
      items.map(({ src }) => src)
    ))}
<p>Loading...</p> 
{:then images}
	{#each images as image}
		<img src={image.src} alt="item"/>
	{/each}
{:catch error}
<p style="color: red">{error.message}</p>
{/await}
{:catch error}
<p style="color: red">{error.message}</p>
{/await}`
}

export const INTERMEDIATE_APP_MAP = {
  'data.js': INTERMEDIATE_DATA_APP,
  'renderers.js': INTERMEDIATE_RENDERER_APP
}

export const DEFAULT_SVELTE_URL = 'https://unpkg.com/svelte@latest';

export const DEFAULT_WORKERS_URL = 'workers';

export const STORAGE_KEY = 'authoring-pilingjs';

export const STORAGE_SAVE_DEBOUNCE = 1000; // 1 second
