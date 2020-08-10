<script>
  import { getContext, createEventDispatcher } from 'svelte';
  import Warning from './Warning.svelte';
  import TopAppBar, {Row, Section, Title} from '@smui/top-app-bar';
  import IconButton, { Icon } from '@smui/icon-button';

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
        <IconButton class="material-icons" aria-label="Run" disabled={$autoRun}
        on:click={runHandler}>
          play_arrow
        </IconButton>
        <IconButton class="material-icons" aria-label="Reset">restore</IconButton>
        <IconButton class="material-icons" aria-label="Import Project">publish</IconButton>
        <Title>{title}</Title>
      </Section>
      <Section align="end" toolbar>
        <IconButton class="material-icons" aria-label="Download">file_download</IconButton>
        <IconButton class="material-icons" aria-label="Settings" on:click={openSettingsHandler}>settings</IconButton>
      </Section>
    </Row>
  </TopAppBar>
</div>