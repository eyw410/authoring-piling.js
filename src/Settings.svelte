<script>
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
    margin: 1.5rem 0 .75rem 0;
    font-size: 1rem;
  }

  h2:first-child {
    margin-top: .5rem;
  }

  #settings :global(.list) {
    border: 1px solid rgba(0,0,0,.12);
    border-radius: 0.25rem;
  }
</style>

<div id="settings">
  <h2>Authoring Tool</h2>
  <List class="list" dense nonInteractive>
    <Item ripple={false} class="item">
      <Label>Run automatically on code changes</Label>
      <Meta>
        <Switch bind:checked={$autoRun} color="secondary" />
      </Meta>
    </Item>
    <Separator />
    <Item ripple={false}>
      <Text>App cache</Text>
      <Meta>
        <Button on:click={resetStoresAndReload} color="secondary" dense>
          <Label>Reset</Label>
        </Button>
      </Meta>
    </Item>
  </List>
  <h2>Piling State</h2>
  <List class="list" dense nonInteractive>
    <Item ripple={false}>
      <Text>Preserve piling state on code changes</Text>
      <Meta>
        <Switch bind:checked={$alwaysPreservePiles} on:change={runHandler} color="secondary" />
      </Meta>
    </Item>
    <Separator />
    <Item ripple={false}>
      <Text>Piling state</Text>
      <Meta>
        <Button on:click={resetPilingState} color="secondary" dense>
          <Label>Reset</Label>
        </Button>
      </Meta>
    </Item>
  </List>
</div>
