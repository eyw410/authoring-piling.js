<script>
  import { autoRun } from './stores';

  const toggleAuto = () => {
    autoRun.update(val => !val);
  };
</script>

<style>
  div {
    text-align: center;
  }
</style>

<div on:click={toggleAuto}>runs automatically: {$autoRun}</div>
