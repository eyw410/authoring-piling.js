<script>
  import { getContext, createEventDispatcher } from 'svelte';
  import Warning from './Warning.svelte';
  import TopAppBar, {Row, Section, Title} from '@smui/top-app-bar';
  import Fab, {Label, Icon} from '@smui/fab';

  import { autoRun } from './stores';

  import { NAV_HEIGHT } from './constants.js';
  import Settings from './Settings.svelte';

  const { open: openModal } = getContext('simple-modal');

  const dispatch = createEventDispatcher();

  const runHandler = () => {
    if ($autoRun) {
      openModal(Warning, { message: 'Auto-run is already on :)' })
    } else {
      dispatch('rebundle');
    }
  };

  // Settings Modal
  function openSettingsHandler() {
    openModal(Settings);
  }

  let dense = true;
  let prominent = false;
  let variant = 'standard';
  let collapsed = false;
  let title = 'Piling.js Authoring';

</script>

<style>
</style>

<div
  class="bar"
  style="height: {NAV_HEIGHT};">
  <TopAppBar {dense} {prominent} {variant} bind:collapsed style="background-color: #333333">
    <Row>
      <Section>
        <Fab aria-label="Run" disabled={$autoRun} on:click={runHandler}>
          <Icon class="material-icons" dense={true}>play_arrow</Icon>
          <Label>Run</Label>
        </Fab>
        <Fab aria-label="Import Project">
        <Icon class="material-icons">publish</Icon>
        <Label>Load Project</Label>
        </Fab>
        <Title>{title}</Title>
      </Section>
      <Section align="end" toolbar>
        <Fab aria-label="Settings" on:click={openSettingsHandler}>
          <Icon class="material-icons">file_download</Icon>
          <Label>Export</Label>
        </Fab>
        <Fab aria-label="Settings" on:click={openSettingsHandler}>
          <Icon class="material-icons">settings</Icon>
          <Label>Settings</Label>
        </Fab>
      </Section>
    </Row>
  </TopAppBar>
</div>