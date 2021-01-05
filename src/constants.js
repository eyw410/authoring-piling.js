export const DEFAULT_AUTORUN = true;

export const DEFAULT_ALWAYS_PRESERVE_PILES = true;

export const NAV_HEIGHT = '48px';

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

    const prevState = JSON.parse(sessionStorage.getItem("authoring-pilingjs-piling-state"));

    const initProps = {
      itemRenderer,
      coverRenderer,
      previewRenderer,
      coverAggregator,
      previewAggregator,
      ...styles
    };
    const settings = JSON.parse(sessionStorage.getItem("authoring-pilingjs"));
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
        sessionStorage.setItem("authoring-pilingjs", { ...settings, loadWithoutSavedPiles: false })
      }
    }

    const groupArrange = importedGroupArrange.default && isFunction(importedGroupArrange.default)
      ? importedGroupArrange.default({ domElement, piling })
      : importedGroupArrange || [];

    // Future: extend the sidebar using groupArrange
		
		const optionsEl = document.getElementById('options');
		const optionsTogglerEl = document.getElementById('options-toggler');
		const undoButton = document.getElementById('undo');

		let isOptionsOpen = false;
		let bodyClasses = document.body.className;
		console.log(bodyClasses);

		const handleOptionsTogglerClick = (event) => {
			event.preventDefault();
			console.log('clicked')

			if (sessionStorage.getItem('pilingjs-options') === null) {
				sessionStorage.setItem('pilingjs-options', 'true');
				bodyClasses += ' options-opened';
			}
			isOptionsOpen = !isOptionsOpen;

			if (isOptionsOpen) {
				optionsEl.setAttribute('class', 'open');
				document.body.setAttribute('class', `${ bodyClasses } options-open`);
			} else {
				optionsEl.removeAttribute('class');
				document.body.setAttribute('class', bodyClasses);
			}
		};

		optionsTogglerEl.addEventListener('click', handleOptionsTogglerClick);
  });

  onDestroy(() => {
    const settings = JSON.parse(sessionStorage.getItem("authoring-pilingjs"));
    const loadWithoutSavedPiles = settings ? settings.loadWithoutSavedPiles === 'true' : false;
    console.log('load without saved piles is ', loadWithoutSavedPiles);
    if (piling) {
      sessionStorage.setItem("authoring-pilingjs-piling-state", JSON.stringify(piling.exportState()));
      piling.destroy();
    }
  });
</script>

<style>
#pilingjs-wrapper {
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0;
}
	
	#options {
		position: absolute;
		z-index: 3;
		top: 0;
		right: 0;
		bottom: 0;
		width: 16rem;
		background: #fff;
		border-left: 1px solid #ccc;
		color: #000;
		transform: translate(16rem, 0);
		transition: transform .2s cubic-bezier(0.25, 0.1, 0.25, 1)
	}

	#options.open {
		transform: translate(0, 0)
	}

	#options .toggler {
		position: absolute;
		display: block;
		top: 1rem;
		left: 0;
		height: 3rem;
		width: 3rem;
		padding: 0.5rem;
		background: #fff;
		color: #000;
		border: 1px solid #b2b2b2;
		border-radius: 0.25rem;
		opacity: 0.2;
		transform: translate(-4rem, 0);
		transition: transform .2s cubic-bezier(0.25, 0.1, 0.25, 1),border-radius .2s cubic-bezier(0.25, 0.1, 0.25, 1),background .2s cubic-bezier(0.25, 0.1, 0.25, 1),opacity .2s cubic-bezier(0.25, 0.1, 0.25, 1),box-shadow .2s cubic-bezier(0.25, 0.1, 0.25, 1);
		transform-origin: center;
		animation: 10s cubic-bezier(0.25, 0.1, 0.25, 1) 0s 1 fadeInLight
	}

	#options .toggler:hover {
		opacity: 0.4
	}

	#options .toggler:focus {
		outline: none;
		box-shadow: 0 0 0 2px rgba(255,127,246,0.95)
	}

	#options .toggler svg {
		width: 100%;
		height: 100%
	}
	
	@keyframes fadeInLight {
		0% {
			opacity: 1;
			color: #fff;
			border-color: #000;
			background: #000;
			transform: translate(-4rem, 0) scale(1)
		}

		80% {
			opacity: 1;
			color: #fff;
			border-color: #000;
			background: #000;
			transform: translate(-4rem, 0) scale(1)
		}

		82.5% {
			opacity: 1;
			color: #fff;
			border-color: #d100c3;
			background: #d100c3;
			transform: translate(-4rem, 0) scale(1.2)
		}

		85% {
			opacity: 1;
			color: #fff;
			border-color: #000;
			background: #000;
			transform: translate(-4rem, 0) scale(1.1)
		}

		87.5% {
			opacity: 1;
			color: #fff;
			border-color: #d100c3;
			background: #d100c3;
			transform: translate(-4rem, 0) scale(1.2)
		}

		90% {
			opacity: 1;
			color: #fff;
			border-color: #d100c3;
			background: #d100c3;
			transform: translate(-4rem, 0) scale(1.1)
		}

		100% {
			opacity: 0.2;
			color: #000;
			border-color: #b2b2b2;
			background: #fff;
			transform: translate(-4rem, 0) scale(1)
		}
	}

	#options.open .toggler {
		opacity: 1;
		transform: translate(-3rem, 0);
		border-color: #ccc;
		border-right: 0;
		border-radius: 0.25rem 0 0 0.25rem;
		background: #fff;
		animation: none
	}

	#options .content {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		padding: 0.5rem;
		overflow: auto
	}

	#options .content h4 {
		margin: 1rem 0 0.5rem 0;
		box-shadow: 0 1px 0 0 #ccc
	}

	#options .label-wrapper {
		display: block;
		margin: 0.25rem 0
	}

	#options .label-wrapper .label-title {
		display: block;
		font-size: 0.8rem;
		white-space: nowrap
	}

	#options .checkbox,#options .radio,#options .button,#options input[type='text'],#options input[type='number'] {
		display: block;
		margin: 0.25rem 0;
		font-size: 0.8rem;
		min-width: 0
	}

	#options .button {
		color: #fff;
		background: black;
		line-height: 1.5em;
		border-radius: 0.25rem;
		border: 0;
		background: #000;
		transition: color .2s cubic-bezier(0.25, 0.1, 0.25, 1),background .2s cubic-bezier(0.25, 0.1, 0.25, 1),opacity .2s cubic-bezier(0.25, 0.1, 0.25, 1),box-shadow .2s cubic-bezier(0.25, 0.1, 0.25, 1)
	}

	#options .button:focus {
		outline: none;
		box-shadow: 0 0 0 1px black,0 0 0 3px rgba(255,127,246,0.95)
	}

	#options .button :disabled {
		color: #000;
		background: #fff;
		opacity: 0.33
	}

	#options .title:after {
		content: ':';
		margin-right: 0.25rem
	}

	#options .inputs {
		display: flex;
		align-items: center
	}

	#options .value {
		font-size: 0.8em;
		text-align: right;
		width: 2rem
	}

	#options .input-wrapper.with-sub-inputs {
		display: flex
	}

	#options .input-wrapper.with-sub-inputs .button {
		white-space: nowrap;
		margin-right: 0.25rem
	}

	#options .input-wrapper.with-sub-inputs .inputs {
		width: 100%
	}

	body.permanent-options #options {
		transform: translate(0, 0)
	}

	body.permanent-options #options .toggler {
		display: none
	}

	body.fullscreen #options .toggler {
		opacity: 0
	}

	body.fullscreen #options.open .toggler {
		opacity: 1
	}

	body.dark-mode #options {
		color: #fff;
		border-left-color: #333;
		background: #000
	}

	body.dark-mode #options .content h4 {
		box-shadow: 0 1px 0 0 #333
	}

	body.dark-mode #options .toggler {
		color: #fff;
		border-color: #4d4d4d;
		background: #000;
		animation: 10s cubic-bezier(0.25, 0.1, 0.25, 1) 0s 1 fadeInDark
	}

	@keyframes fadeInDark {
		0% {
			opacity: 1;
			color: #000;
			border-color: #fff;
			background: #fff;
			transform: translate(-4rem, 0) scale(1)
		}

		80% {
			opacity: 1;
			color: #000;
			border-color: #fff;
			background: #fff;
			transform: translate(-4rem, 0) scale(1)
		}

		82.5% {
			opacity: 1;
			color: #000;
			border-color: #ff7ff6;
			background: #ff7ff6;
			transform: translate(-4rem, 0) scale(1.2)
		}

		85% {
			opacity: 1;
			color: #000;
			border-color: #fff;
			background: #fff;
			transform: translate(-4rem, 0) scale(1.1)
		}

		87.5% {
			opacity: 1;
			color: #000;
			border-color: #ff7ff6;
			background: #ff7ff6;
			transform: translate(-4rem, 0) scale(1.2)
		}

		90% {
			opacity: 1;
			color: #000;
			border-color: #ff7ff6;
			background: #ff7ff6;
			transform: translate(-4rem, 0) scale(1.1)
		}

		100% {
			opacity: 0.2;
			color: #fff;
			border-color: #4d4d4d;
			background: #000;
			transform: translate(-4rem, 0) scale(1)
		}
	}

	body.dark-mode #options.open .toggler {
		border-color: #333;
		background: #000;
		animation: none
	}

	body.dark-mode #options .button {
		color: #000;
		background: #fff
	}

	body.dark-mode #options .button :disabled {
		color: #fff;
		background: #000
	}

	body.options-opened #options .toggler {
		animation: none
	}

	#undo {
		position: relative;
		display: block;
		width: 100%;
		line-height: 1.5rem;
		border-radius: 0.25rem;
		color: #fff;
		border: 0;
		background: #000;
		transition: color .2s cubic-bezier(0.25, 0.1, 0.25, 1),border .2s cubic-bezier(0.25, 0.1, 0.25, 1),background .2s cubic-bezier(0.25, 0.1, 0.25, 1),opacity .2s cubic-bezier(0.25, 0.1, 0.25, 1),box-shadow .2s cubic-bezier(0.25, 0.1, 0.25, 1)
	}

	#undo:focus {
		outline: none;
		box-shadow: 0 0 0 1px black,0 0 0 3px rgba(255,127,246,0.95)
	}

	#undo :disabled {
		color: #000;
		background: #fff;
		opacity: 0.33
	}

	body.dark-mode #undo {
		color: #000;
		background: #fff
	}

	body.dark-mode #undo :disabled {
		color: #fff;
		background: #000
	}

</style>

<div>
	<aside id="options">
	<button id="options-toggler" class="toggler">
        <svg
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="1.414"
        >
          <path
            d="M9.418 16H6.582c-.32 0-.582-.26-.582-.582v-1.76c-.702-.248-1.344-.624-1.898-1.098l-1.526.88c-.278.162-.635.066-.795-.212L.364 10.772c-.16-.278-.065-.634.213-.795l1.524-.88C2.034 8.74 2 8.375 2 8s.034-.74.1-1.097l-1.524-.88c-.278-.16-.374-.517-.213-.795L1.78 2.772c.16-.278.518-.374.796-.213l1.526.88C4.656 2.966 5.298 2.59 6 2.342V.582C6 .262 6.26 0 6.582 0h2.836c.32 0 .582.26.582.582v1.76c.702.248 1.344.624 1.898 1.098l1.526-.88c.278-.162.635-.066.795.212l1.417 2.456c.16.278.065.634-.213.795l-1.524.88c.066.356.1.722.1 1.097s-.034.74-.1 1.097l1.524.88c.278.16.374.517.213.795l-1.418 2.456c-.16.278-.518.374-.796.213l-1.526-.88c-.554.474-1.196.85-1.898 1.098v1.76c0 .32-.26.582-.582.582zM8 4c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4z"
            fill="currentColor"
          />
        </svg>
      </button>
			<div class="content">
        <button id="undo" disabled="disabled">Undo</button>
      </div>
	</aside>
</div>
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

export const DEFAULT_COMPONENT_SIDEBAR = {
  type: 'svelte',
  name: 'sidebar',
  source: ``,
};

export const DEFAULT_COMPONENTS = [
  DEFAULT_COMPONENT_APP,
  DEFAULT_COMPONENT_DATA_JSON,
  DEFAULT_COMPONENT_DATA_JS,
  DEFAULT_COMPONENT_RENDERERS,
  DEFAULT_COMPONENT_AGGREGATORS,
  DEFAULT_COMPONENT_STYLES,
  DEFAULT_COMPONENT_GROUP_ARRANGE,
  DEFAULT_COMPONENT_SIDEBAR,
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
  'sidebar.svelte': DEFAULT_COMPONENT_SIDEBAR,
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

export const STORAGE_KEY = 'authoring-pilingjs';

export const STORAGE_SAVE_DEBOUNCE = 1000; // 1 second
