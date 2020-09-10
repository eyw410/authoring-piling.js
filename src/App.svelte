<script>
  import { onDestroy } from 'svelte';
  import { debounce } from '@flekschas/utils';
  import Modal from 'svelte-simple-modal';
  import Editor from './Editor.svelte';
  import TopBar from './TopBar.svelte';
  import * as stores from './stores';
  import { STORAGE_SAVE_DEBOUNCE } from './constants';
  import { saveStores, serializeStores } from './utils';

  const saveStoresDb = debounce(() => {
    const serializedStore = serializeStores(stores);
    saveStores(serializedStore);
  }, STORAGE_SAVE_DEBOUNCE);

  const unsubscribers = Object.values(stores).map((property) => {
    return property.subscribe(saveStoresDb);
  });

  onDestroy(() => {
    unsubscribers.forEach((unsubscriber) => unsubscriber());
  });

  let rebundle;
</script>

<style>
  .app {
    height: 100vh;
    background-color: #fff;
    --font: 'Inter', 'Open Sans', 'Helvetica', 'Verdana', sans-serif;
    --font-mono: 'Inconsolata', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono',
      'Courier New', monospace;
    --prime: rgb(3, 102, 114);
    --second: #676778;
    --back-light: #f6fafd;
  }
</style>

<Modal>
  <div class="app">
    <TopBar on:rebundle={rebundle} />
    <Editor bind:rebundle />
  </div>
</Modal>
