<script>
  import { getContext, onMount, onDestroy, tick, createEventDispatcher } from 'svelte';
  import { get } from 'svelte/store';
  import Button from '@smui/button';
  import clone from 'just-clone';

  import Error from './Error.svelte';
  import Warning from './Warning.svelte';

  import { components, autoRun } from './stores';

  import { readJsonFile } from './utils';

  import pilingJs from '../node_modules/piling.js/dist/piling.min';
  import pixiJs from '../node_modules/pixi.js/dist/pixi.min';
  import umapJs from '../node_modules/umap-js/lib/umap-js.min';

  import '../theme/_smui-theme.scss';

  import { NAV_HEIGHT } from './constants.js';
  import Settings from './Settings.svelte';

  const { open: openModal } = getContext('simple-modal');
  const svelteUrl = 'https://unpkg.com/svelte@latest';

  const dispatch = createEventDispatcher();

  export let rebundle = () => {
    dispatch('rebundleMessage', {});
  };

  // Settings Modal
  function showSettings() {
    openModal(Settings);
  }
</script>

<style>
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

  .bar .autoRun button {
    cursor: not-allowed;
    background-color: transparent;
  }

  /* Add responsiveness - will automatically display the navbar vertically instead of horizontally on screens less than 500 pixels */
  @media screen and (max-width: 500px) {
    .bar span {
      float: none;
      display: block;
    }
  }
</style>

<div>
  <div
    class="bar"
    style="height: {NAV_HEIGHT};">
    <span class:autoRun={$autoRun}>
      <button
        class="bar-item"
        type="button"
        on:click={() => {$autoRun ? openModal(Warning, { message: 'Auto-run is already on :)' }) : rebundle()}}>
        Run
      </button>
    </span>
    <span>
      <button
        class="bar-item"
        type="button"
        on:click={() => {alert("Not implemented")}}>
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
</div>