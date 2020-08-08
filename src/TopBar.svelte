<script>
  import { getContext, createEventDispatcher } from 'svelte';
  import Warning from './Warning.svelte';

  import { autoRun } from './stores';

  import { NAV_HEIGHT } from './constants.js';
  import Settings from './Settings.svelte';

  const { open: openModal } = getContext('simple-modal');

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
