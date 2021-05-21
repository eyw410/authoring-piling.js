export const DEFAULT_AUTORUN = true;

export const DEFAULT_DEBUG = false;
export const DEFAULT_ALWAYS_PRESERVE_PILES = true;

export const NAV_HEIGHT = '48px';

export const STORAGE_KEY = 'authoring-pilingjs';

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
	import Sidebar from './sidebar.svelte';
  import prevPiles from './piling-state.js';
  import localData from './data.json';

  const isFunction = f => !!(f && f.constructor && f.call && f.apply);

  let domElement;
  let piling;
	let hasInitialized = false;
	let optionsOpen;
  
  onMount(async () => {
    let items;
    try {
      items = (getData || identity)(localData);
    } catch (e) {
      // Either getData() is broken or it's actually a functional component
    }

    if (items === undefined || isFunction(items)) {
      items = getData({ domElement })(localData);
    }

    items = await Promise.resolve(items);

    const aggregators = importedAggregators.default && isFunction(importedAggregators.default)
      ? importedAggregators.default({ domElement })
      : importedAggregators;
    const coverAggregator = aggregators.coverAggregator || null;
    const previewAggregator = aggregators.previewAggregator || null;
    
    const renderers = importedRenderers.default && isFunction(importedRenderers.default)
      ? importedRenderers.default({ domElement })
      : importedRenderers;
    const itemRenderer = renderers.itemRenderer;
    const coverRenderer = coverAggregator ? renderers.coverRenderer || renderers.itemRenderer : renderers.coverRenderer  || null;
    const previewRenderer = previewAggregator ? renderers.previewRenderer || renderers.itemRenderer : renderers.previewRenderer || null;

    const styles = importedStyles.default && isFunction(importedStyles.default)
      ? importedStyles.default({ domElement })
      : importedStyles.default || {};

    const replProps = {
      itemRenderer,
      coverRenderer,
      previewRenderer,
      coverAggregator,
      previewAggregator,
      ...styles
    };
    // compare previous styles with new ones and try to null out
    const settings = JSON.parse(sessionStorage.getItem("${STORAGE_KEY}"));
    const debug = settings && settings.debug === 'true';
    if (prevPiles !== null && !debug && !sessionStorage.getItem("resetPilesOnce") && settings.alwaysPreservePiles) {
      piling = await createLibraryFromState(domElement, {
        ...prevPiles,
        ...replProps,
      }, { debug: true });
      piling.set('items', items);
    } else {
      piling = createLibrary(domElement, { ...replProps, items });
      sessionStorage.removeItem("resetPilesOnce");
    }
    const ignoredActions = new Set([
      'OVERWRITE',
      'SOFT_OVERWRITE',
      'SET_CLICKED_PILE',
      'SET_FOCUSED_PILES',
      'SET_MAGNIFIED_PILES',
    ]);
    const createRequestIdleCallback = () => {
      if (window.requestIdleCallback) return window.requestIdleCallback;
      return (fn) => debounce(fn, 750);
    };
    const requestIdleCallback = createRequestIdleCallback();

    const updateHandler = ({ action }) => {
      if (ignoredActions.has(action.type)) return;
      const state = piling.exportState();

      let bc = new BroadcastChannel(settings.tabId);
      bc.postMessage({ type: 'update', payload: JSON.stringify(piling.exportState()) })
    };
    
    const updateHandlerIdled = (...args) => {
      requestIdleCallback(() => {
        updateHandler(...args)
      })
    }
    piling.subscribe('update', updateHandlerIdled);
    const groupArrange = importedGroupArrange.default && isFunction(importedGroupArrange.default)
      ? importedGroupArrange.default({ domElement, piling })
      : importedGroupArrange || [];

		// Future: extend the sidebar using groupArrange
		
		optionsOpen = false;

	// 	const optionsEl = document.getElementById('options');
	// 	const optionsTogglerEl = document.getElementById('options-toggler');
	// 	const undoButton = document.getElementById('undo');
	// 	let isOptionsOpen = false;
	// 	let bodyClasses = document.body.className;
	// 	console.log(bodyClasses);
	// 	const handleOptionsTogglerClick = (event) => {
	// 		event.preventDefault();
	// 		console.log('clicked')
	// 		if (sessionStorage.getItem('pilingjs-options') === null) {
	// 			sessionStorage.setItem('pilingjs-options', 'true');
	// 			bodyClasses += ' options-opened';
	// 		}
	// 		isOptionsOpen = !isOptionsOpen;
	// 		if (isOptionsOpen) {
	// 			optionsEl.setAttribute('class', 'open');
	// 			document.body.setAttribute('class', '\$\{ bodyClasses } options-open');
	// 		} else {
	// 			optionsEl.removeAttribute('class');
	// 			document.body.setAttribute('class', bodyClasses);
	// 		}
	// 	};
	// 	optionsTogglerEl.addEventListener('click', handleOptionsTogglerClick);
  });

  onDestroy(() => {
    if (piling) piling.destroy();
  });
</script>

<style>
:global(body) {
	overflow: hidden;
}

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
	background: pink;
	border-left: 1px solid #ccc;
	color: #000;
	transform: translate(16rem, 0);
	transition: transform .2s cubic-bezier(0.25, 0.1, 0.25, 1)
}
#options.optionsOpen {
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

#options .content {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	padding: 0.5rem;
	overflow: auto
}
</style>

<div class="wrapper">
	<aside id="options" class:optionsOpen>
			<button id="options-toggler" class="toggler" class:optionsOpen on:click={() => optionsOpen = !optionsOpen}>
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
				<Sidebar piling={piling} additionalOptions={undefined} />
      </div>
	</aside>
	<div bind:this={domElement} id="pilingjs-wrapper"></div>
</div>`,
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
	source: `<script>
	import { onMount, afterUpdate } from 'svelte';
	import { isFunction } from '@flekschas/utils';
	import Option from './option.svelte';
	
	export let additionalOptions;
	export let piling;
	
	let options = [];
	
	afterUpdate(() => {
		if (!piling) {
			options = [{id: 'hi'}];
		} else {
			let pilingLib = piling;
			let pileItemOffsetX;
			let pileItemOffsetY;
			const pileItemOffsetDisable = isFunction(piling.get('pileItemOffset'));
			if (!pileItemOffsetDisable) {
				const [x, y] = piling.get('pileItemOffset');
				pileItemOffsetX = x;
				pileItemOffsetY = y;
			}
			options = [
				{
					id: 'pile-item',
					title: 'Pile/Item',
					fields: [
						{
							name: 'Item size',
							propName: 'itemSize',
							labelMinWidth: '4rem',
							dtype: 'int',
							min: 4,
							max: 320,
							numSteps: 79,
							nullifiable: true,
						},
						{
							name: 'Item offset',
							propName: 'pileItemOffset',
							width: '6rem',
							dtype: null,
							hide: pileItemOffsetDisable || piling.get('previewRenderer'),
							subInputs: [
								{
									name: 'x',
									dtype: 'float',
									defaultValue: pileItemOffsetX,
									setter: (x) => {
										pileItemOffsetX = x;
										piling.set('pileItemOffset', [
											pileItemOffsetX,
											pileItemOffsetY,
										]);
									},
								},
								{
									name: 'y',
									dtype: 'float',
									defaultValue: pileItemOffsetY,
									setter: (y) => {
										pileItemOffsetY = y;
										piling.set('pileItemOffset', [
											pileItemOffsetX,
											pileItemOffsetY,
										]);
									},
								},
							],
						},
						// Can't be adjusted dynamically at the moment
						// {
						//   name: 'previewPadding',
						//   hide: isFunction(pilingLib.get('previewPadding')),
						//   labelMinWidth: '5rem',
						//   dtype: 'int',
						//   min: 0,
						//   max: 10
						// },
						{
							name: 'Preview spacing',
							propName: 'previewSpacing',
							hide:
								isFunction(pilingLib.get('previewSpacing')) ||
								!piling.get('previewRenderer'),
							labelMinWidth: '5rem',
							dtype: 'int',
							min: 0,
							max: 10,
						},
						{
							name: 'Preview offset',
							propName: 'previewOffset',
							hide:
								isFunction(pilingLib.get('previewOffset')) ||
								!piling.get('previewRenderer'),
							labelMinWidth: '5rem',
							dtype: 'int',
							min: 0,
							max: 10,
						}
					],
				},
				{
					id: 'layout',
					title: 'Layout',
					fields: [
						{
							name: 'Cell size',
							propName: 'cellSize',
							labelMinWidth: '4rem',
							dtype: 'int',
							min: 16,
							max: 320,
							numSteps: 38,
							nullifiable: true,
						},
						{
							name: 'Cell padding',
							propName: 'cellPadding',
							labelMinWidth: '4rem',
							dtype: 'int',
							min: 0,
							max: 64,
							numSteps: 32,
							nullifiable: true,
						},
						{
							name: 'Columns',
							propName: 'columns',
							labelMinWidth: '4rem',
							dtype: 'int',
							min: 2,
							max: 80,
							numSteps: 39,
							nullifiable: true,
						},
// 						{
// 							name: 'Row height',
// 							propName: 'rowHeight',
// 							labelMinWidth: '4rem',
// 							dtype: 'int',
// 							min: 16,
// 							max: 320,
// 							numSteps: 38,
// 							nullifiable: true,
// 						},
						{
							name: 'Cell aspect ratio',
							propName: 'cellAspectRatio',
							labelMinWidth: '6.25rem',
							dtype: 'float',
							nullifiable: true,
						},
						{
							name: 'Cell alignment',
							propName: 'pileCellAlignment',
							labelMinWidth: '6.25rem',
							dtype: 'string',
							values: [
								'topLeft',
								'topRight',
								'bottomLeft',
								'bottomRight',
								'center',
							],
						},
					],
				},
			...(additionalOptions || []),];
			options = options.map(option => {
				return {...option, validFields: option.fields.filter((field) => typeof field.values === 'undefined' || field.values.length)}
			}).filter(option => option.validFields.length);
		}
	})
</script>

{#each options as section}
	<section id={section.id}>
	<h4>
		{section.title}
	</h4>
	<div class="fields">
		{#if section.validFields}
		{#each section.validFields as field}
		<Option piling={piling} field={field} hasSubInputs={field.subInputs && field.subInputs.length > 0} />
		{/each}
		{/if}
	</div>
</section>
{/each}`,
};

export const DEFAULT_COMPONENT_OPTION = {
	type: 'svelte',
	name: 'option',
	source: `<script>
	import Field from './field.svelte';
	export let piling;
	export let field;
	export let hasSubInputs;
	
	let newElements;
	let value;
	
	if (field.defaultValue) value = field.defaultValue;

// 	event listeners
</script>

<div class="label-wrapper">
	<div class="label-title">
		<span class="title">{field.name}</span>
	</div>
	<div class={hasSubInputs ? 'input-wrapper with-sub-inputs' : 'input-wrapper'} >
		<div class="inputs">
			{#if field.dtype !== null}
			<div class="input">
				<!-- create input here -->
				<Field piling={piling} field={field} bind:valueText={value} /> 
			</div>
				{#if field.dtype === 'int' && (field.min || field.max)}
				<span class="value">{value}</span>
				{/if}
			{/if}
			{#if field.subInputs && field.subInputs.length > 0}
			{#each field.subInputs as subInput}
			<div class="subinputs">
				<!-- create subinputs here -->
				<Field piling={piling} field={subInput} bind:valueText={value} />
			</div>
			{#if subInput.dtype === 'int' &&
            (subInput.min || subInput.max)}
				<span class="value">{value}</span>
				{/if}
			{/each}
			{/if}
<!-- 			TODO: figure out what to do with the value span -->
		</div>
	</div>
</div>`
};

export const DEFAULT_COMPONENT_FIELD = {
	type: 'svelte',
	name: 'field',
	source: `<script>
	import Button from './button.svelte';
	import Checkboxes from './checkboxes.svelte';
	import Select from './select.svelte';
	import Radio from './radio.svelte';
	import Input from './input.svelte';
	
	export let piling;
	export let field;
	export let valueText;
	export let isSub = false;
	
	let currentValue =
      !Number.isNaN(+field.defaultValue) || field.defaultValue
        ? field.defaultValue
        : field.propName && piling.get(field.propName);
	
	let isSet;
	
	let eventType = field.action ? 'click' : (field.onInput ? 'input' : 'change')
	
	const parseDtype = {
    boolean: (v) => !!v,
    int: (v) => +v,
    float: (v) => +v,
    string: (v) => v,
  };
	
	let input;
	
	$: if (currentValue || !currentValue) {
		if (field) {
			if (field.dtype === 'boolean') {
			// ask but I don't think we need this case
			}
			if (isSetChecked) {
				if (field.setter) field.setter(currentValue)
				else piling.set(field.propName, currentValue);
			} else if (field.nullifiable) {
				if (field.setter) field.setter(null)
				else piling.set(field.propName, null);
			}
			valueText = currentValue;
		}
// 			if (field.setter) field.setter(currentValue)
// 			if (piling && field.propName) piling.set(field.propName, currentValue);
		}
		
// 		let canChange = true;
// 		if (field.values && field.multiple) {
// 			isSet.checked = currentValue.length;
// 		}

// 		if (field.dtype === 'boolean') {
// 			if (field.setter) {
// 				field.setter(currentValue);
// 			} else {
// 				piling.set(field.propName, currentValue);
// 			}
// 		} else if (canChange) {
// // 			value = field.dtype && parseDtype[field.dtype](currentValue);

// 			if (field.setter) {
// 				field.setter(currentValue);
// 			} else if (field.action) {
// 				field.action(currentValue);
// 			} else {
// 				piling.set(field.propName, currentValue);
// 			}

// 			if (field.dtype === 'int' && (field.min || field.max)) {
// 				valueText = currentValue;
// 			}
// 		} else if (field.nullifiable) {
// 			if (field.setter) {
// 				field.setter(null);
// 			} else {
// 				piling.set(field.propName, null);
// 			}
// 		}
	
	const listener = (event) => {
		return;
		if (!field) {
			console.log('no field')
			return;
		}
		console.log('i hearya', event.target.value)
		let value = event.target.value;
		console.log(field.setter ? field.setter : field.propName);

		if (field.values && field.multiple) {
			value = input.value;
			isSet.checked = value.length;
		}

		if (field.dtype === 'boolean') {
			value = event.target.checked;
			if (field.setter) {
				field.setter(value);
			} else {
				piling.set(field.propName, value);
			}
		} else if (isSet && isSet.checked) {
			value = field.dtype && parseDtype[field.dtype](value);

			if (field.setter) {
				field.setter(value);
			} else if (field.action) {
				field.action(value);
			} else {
				piling.set(field.propName, value);
			}

			if (field.dtype === 'int' && (field.min || field.max)) {
				valueText = value;
			}
		} else if (field.nullifiable) {
			if (field.setter) {
				field.setter(null);
			} else {
				piling.set(field.propName, null);
			}
		}
	};
	
	let isSetChecked = field.nullifiable ? (field.propName &&
			piling.get(field.propName) !== undefined &&
			piling.get(field.propName) !== null) : true; // change this into just the bound value and rename to isSet
	
	$: if (isSetChecked) {
// 		const value = field.dtype && parseDtype[field.dtype](input.value);

		if (field.setter) {
			field.setter(currentValue);
		} else if (field.action) {
			field.action(currentValue);
		} else {
			piling.set(field.propName, currentValue);
		}

// 		if (field.dtype === 'int' && (field.min || field.max)) {
// 			valueText = value;
// 		}
	} else {
		if (field.setter) {
			field.setter(null);
		} else {
			piling.set(field.propName, null);
		}
		valueText = '';
	}
	
</script>

{#if field.action}
<Button field={field} on:click={listener}/>
{:else}
	<input type="checkbox" bind:checked={isSetChecked} disabled={!field.nullifiable} style={{'display': field.hideCheckbox && 'none'}} />
	{#if field.values}
		{#if field.multiple}
		<Checkboxes field={field} bind:currentValue={currentValue} />
		{:else}
			{#if field.values.length > 3 || isSub || field.dropDown}
			<Select field={field} bind:currentValue={currentValue} />
			{:else}
			<Radio field={field} bind:currentValue={currentValue} />
			{/if}
		{/if}
	{:else}
	<Input field={field} bind:currentValue={currentValue} bind:this={input} />
	{/if}
	{#if !(field.values && (field.multiple || !field.nullifiable)) &&
					field.dtype !== 'boolean'}
<!-- isSet is the element that nullifiable (in the specification) makes stay the same or changeable -->
<!-- 		<input type="checkbox" checked={true} bind:this={isSet} disabled={!field.nullifiable} style=\{\{'display': field.hideCheckbox && 'none'\}\} /> -->
	{/if}
{/if}`
};

export const DEFAULT_COMPONENT_BUTTON = {
	type: 'svelte',
	name: 'button',
	source: `<script>
	export let field;
	</script>
	
	<button class="button" style={{"minWidth": field.minWidth}}>
		{field.name}
	</button>`
};

export const DEFAULT_COMPONENT_CHECKBOXES = {
	type: 'svelte',
	name: 'checkboxes',
	source: `<script>
	export let field;
	export let currentValue;
	
	const onChange = () => {
		
	}
	
	Object.defineProperty(this, 'value', {
		get: () =>
		Array.from(
			checkboxes.querySelectorAll('input:checked'),
			(e) => e.value
		),
	});
	
	this.addEventListener = (type, callback) => {
		Array.prototype.forEach.call(
			this.querySelectorAll('input'),
			(checkbox) => {
				checkbox.addEventListener(type, callback);
			}
		);
	};
</script>

<div class={field.values.length > 5 ? 'checkboxes scrollbar' : 'checkboxes'}>
	{#each field.values as value}
		<label class="checkbox">
			<input type="checkbox" value={value} selected={currentValue === value} on:change={onChange} />
			<span>{value}</span>
		</label>
	{/each}
</div>`
};

export const DEFAULT_COMPONENT_SELECT = {
	type: 'svelte',
	name: 'select',
	source: `<script>
	export let field;
	export let currentValue;
	let me;
	
	const onChange = () => {
		if (field.multiple) {
			 currentValue = Array.from(
						me.querySelectorAll('option:checked'),
						(e) => e.value)
			console.log(currentValue);
		} else {
			currentValue = me.options[me.selectedIndex].value;
			console.log(currentValue)
		}
	}
	

// 		if (field.multiple) {
// 		Object.defineProperty(me, 'value', {
// 			get: () => {
// 				return Array.from(
// 					this.querySelectorAll('option:checked'),
// 					(e) => e.value
// 				);
// 			},
// 		});
// 	} else {
// 		Object.defineProperty(this, 'value', {
// 			get: () => this.options[this.selectedIndex].value,
// 		});
// 	}
</script>

<select bind:this={me} multiple={field.multiple ? 'multiple' : ''} on:blur={onChange}>
	{#each field.values as value, i}
	<option value={value} selected={currentValue === value}>{(field.labels && field.labels[i]) || value}</option>
	{/each}
</select>`
};

export const DEFAULT_COMPONENT_RADIO = {
	type: 'svelte',
	name: 'radio',
	source: `<script>
	export let field;
	export let currentValue;
	
	Object.defineProperty(this, 'value', {
		get: () => this.querySelector('input:checked').value,
	});

	this.addEventListener = (type, callback) => {
		Array.prototype.forEach.call(
			this.querySelectorAll('input'),
			(radio) => {
				radio.addEventListener(type, callback);
			}
		);
	};
</script>

<div>
	{#each field.values as value}
	<label class="radio">
		<input type="radio" name={field.name} value={value} checked={currentValue === value} />
		<span>{value}</span>
	</label>
	{/each}
</div>`
};

export const DEFAULT_COMPONENT_INPUT = {
	type: 'svelte',
	name: 'input',
	source: `<script>
	import { addListeners } from './listeners.js';
	export let field;
	export let currentValue;
	
	const dtypeToInputType = {
    boolean: 'checkbox',
    int: 'number',
    float: 'number',
    string: 'text',
  };
	
	let isRange = !Number.isNaN(+field.min) || !Number.isNaN(+field.max) || !Number.isNaN(+field.numSteps)
	
	let type = isRange ? "range" : dtypeToInputType[field.dtype];
	
	const handleInput = e => {
    // in here, you can switch on type and implement
    // whatever behaviour you need
    currentValue = type.match(/^(number|range)$/)
      ? +e.target.value
      : e.target.value;
  };
	
	let input;
</script>

<input bind:this={input} id={field.id} {type} value={currentValue} class={isRange ? "range-slider" : ""} min={!Number.isNaN(+field.min) && +field.min} max={!Number.isNaN(+field.max) && +field.max} step={!Number.isNaN(+field.numSteps) && (+field.max - +field.min) / +field.numSteps} on:change on:input={handleInput} />`
};

export const DEFAULT_COMPONENT_LISTENERS = {
	type: 'js',
	name: 'listeners',
	source: `export function addListeners(piling, input, field, valueEl) {
		const outElements = [];
		let isSet = { checked: true }; // Just a dummy
	
		if (!field.action) {
			isSet = document.createElement('input');
			isSet.setAttribute('type', 'checkbox');
			if (field.nullifiable) {
				if (
					field.propName &&
					piling.get(field.propName) !== undefined &&
					piling.get(field.propName) !== null
				) {
					isSet.checked = true;
				}
	// 			isSet.addEventListener('change', (event) => {
	// 				if (event.target.checked) {
	// 					const value = field.dtype && parseDtype[field.dtype](input.value);
	
	// 					if (field.setter) {
	// 						field.setter(value);
	// 					} else if (field.action) {
	// 						field.action(value);
	// 					} else {
	// 						piling.set(field.propName, value);
	// 					}
	
	// 					if (field.dtype === 'int' && (field.min || field.max)) {
	// 						valueEl.textContent = value;
	// 					}
	// 				} else {
	// 					if (field.setter) {
	// 						field.setter(null);
	// 					} else {
	// 						piling.set(field.propName, null);
	// 					}
	// 					valueEl.textContent = '';
	// 				}
	// 			});
			} else {
				isSet.checked = true;
				isSet.disabled = true;
				if (field.hideCheckbox) {
					isSet.style.display = 'none';
				}
			}
	
			if (
				!(field.values && (field.multiple || !field.nullifiable)) &&
				field.dtype !== 'boolean'
			) {
				outElements.push(isSet);
			}
		}
	
		let eventType = 'change';
		if (field.onInput) eventType = 'input';
		if (field.action) eventType = 'click';
		
	// 	input.addEventListener(eventType, (event) => {
	// 		let value = event.target.value;
			
	// 		if (field.values && field.multiple) {
	// 			value = input.value;
	// 			isSet.checked = value.length;
	// 		}
	
	// 		if (field.dtype === 'boolean') {
	// 			value = event.target.checked;
	// 			if (field.setter) {
	// 				field.setter(value);
	// 			} else {
	// 				piling.set(field.propName, value);
	// 			}
	// 		} else if (isSet && isSet.checked) {
	// 			value = field.dtype && parseDtype[field.dtype](value);
	
	// 			if (field.setter) {
	// 				field.setter(value);
	// 			} else if (field.action) {
	// 				field.action(value);
	// 			} else {
	// 				piling.set(field.propName, value);
	// 			}
	
	// 			if (field.dtype === 'int' && (field.min || field.max)) {
	// 				valueEl.textContent = value;
	// 			}
	// 		} else if (field.nullifiable) {
	// 			if (field.setter) {
	// 				field.setter(null);
	// 			} else {
	// 				piling.set(field.propName, null);
	// 			}
	// 		}
	// 	});
	
		if (field.onMouseenter)
			input.addEventListener('mouseenter', field.onMouseenter);
		if (field.onMouseleave)
			input.addEventListener('mouseleave', field.onMouseleave);
		if (field.onMousedown)
			input.addEventListener('mousedown', field.onMousedown);
		if (field.onMouseup) input.addEventListener('mouseup', field.onMouseup);
	
		return outElements;
	};
	`
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
	DEFAULT_COMPONENT_OPTION,
	DEFAULT_COMPONENT_FIELD,
	DEFAULT_COMPONENT_BUTTON,
	DEFAULT_COMPONENT_CHECKBOXES,
	DEFAULT_COMPONENT_SELECT,
	DEFAULT_COMPONENT_RADIO,
	DEFAULT_COMPONENT_INPUT,
	DEFAULT_COMPONENT_LISTENERS
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
	'option.svelte': DEFAULT_COMPONENT_OPTION,
	'field.svelte': DEFAULT_COMPONENT_FIELD,
	'button.svelte': DEFAULT_COMPONENT_BUTTON,
	'checkboxes.svelte': DEFAULT_COMPONENT_CHECKBOXES,
	'select.svelte': DEFAULT_COMPONENT_SELECT,
	'radio.svelte': DEFAULT_COMPONENT_RADIO,
	'input.svelte': DEFAULT_COMPONENT_INPUT,
	'listeners.js': DEFAULT_COMPONENT_LISTENERS
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
