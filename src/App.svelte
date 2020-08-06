<script>
  import { onDestroy } from 'svelte';
  import { debounce } from '@flekschas/utils';
  import Modal from 'svelte-simple-modal';
  import Editor from './Editor.svelte';
  import TopBar from './TopBar.svelte';
  import * as stores from './stores';
  import { STORAGE_KEY, STORAGE_SAVE_DEBOUNCE } from './constants';
  import { saveStores, serializeStores } from './utils';

  import '../theme/_smui-theme.scss';

  const saveStoresDb = debounce(() => {
    const serializedStore = serializeStores(stores);
    saveStores(STORAGE_KEY, serializedStore);
  }, STORAGE_SAVE_DEBOUNCE);

  const unsubscribers = Object.values(stores).map((property) => {
    return property.subscribe(saveStoresDb);
  });

  onDestroy(() => {
    unsubscribers.forEach((unsubscriber) => unsubscriber());
  });
</script>

<style>
  .repl-outer {
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
  <div class="repl-outer">
    <div class="viewport">
      <div class="w-expanded-95">
        <div
          class="flex flex-col font-sans border border-gray-100 shadow-md
          rounded-lg"
          style="height: 100vh">
        <TopBar />
        <Editor />
        </div>
      </div>
    </div>
  </div>
</Modal>
