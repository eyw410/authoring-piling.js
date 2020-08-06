<script>
  import { autoRun } from './stores';

  let toggleAuto = () => {
    autoRun.update(val => !val);
  };
</script>

<style>
  div {
    text-align: center;
  }
</style>

<div on:click={toggleAuto}>runs automatically: {$autoRun}</div>