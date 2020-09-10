<script>
  import Button, { Label } from '@smui/button';
  import List, { Item, Meta, Separator, Text } from '@smui/list';
  import Switch from '@smui/switch';

  import { autoRun } from './stores';

  import { resetStores } from './utils';

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
</style>

<div>
  <h2>Settings</h2>
  <List dense nonInteractive>
    <Item ripple={false}>
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
  </List>
</div>
