<script>
  import { createEventDispatcher } from 'svelte';
  import Button, { Label } from '@smui/button';
  import List, { Item, Meta, Separator, Text } from '@smui/list';
  import Switch from '@smui/switch';

  import { autoRun, alwaysPreservePiles } from './stores';

  import { resetStores } from './utils';

  export let runHandler;

  const resetPilingState = () => {
    sessionStorage.setItem("resetPilesOnce", "true");
    runHandler();
  }

  const resetStoresAndReload = () => {
    resetStores();
    window.location.reload();
  };
</script>

<style>
  h2 {
    font-size: 1rem;
    text-align: center;
  }

  #settings :global(.item) {
    overflow: visible;
  }

  #settings :global(.indent) {
    padding-left: 40px;
    height: 20px;
  }
</style>

<div id="settings">
  <h2>Settings</h2>
  <List dense nonInteractive>
    <Item ripple={false} class="item">
      <Label>Run automatically</Label>
      <Meta>
        <Switch bind:checked={$autoRun} color="secondary" />
      </Meta>
    </Item>
    <Separator />
    <Item ripple={false}>
      <Text>Authoring tool cache</Text>
      <Meta>
        <Button on:click={resetStoresAndReload} color="secondary" dense>
          <Label>Reset and Reload</Label>
        </Button>
      </Meta>
    </Item>
    <Separator />
    <Item ripple={false}>
      <Text>Reset piling view state</Text>
      <Meta>
        <Button on:click={resetPilingState} color="secondary" dense>
          <Label>Reset Piles</Label>
        </Button>
      </Meta>
    </Item>
    <Item ripple={false} class="item indent">
      <Text>Always preserve piles</Text>
      <Meta>
        <Switch bind:checked={$alwaysPreservePiles} color="secondary" />
      </Meta>
    </Item>
  </List>
</div>
