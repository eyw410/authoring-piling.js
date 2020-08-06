<script>
  export let settings;
  export let toggleAuto = () => {};
</script>

<style>
  div {
    text-align: center;
  }
</style>

<div on:click={toggleAuto}>runs automatically: {$settings.autoRun}</div>