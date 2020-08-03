<script>
  export let isAuto;
  export let toggleAuto = () => {};
</script>

<style>
  div {
    text-align: center;
  }
</style>

<div on:click={toggleAuto}>runs automatically: {isAuto}</div>