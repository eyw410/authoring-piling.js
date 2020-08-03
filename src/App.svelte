<script>
  import { onDestroy } from 'svelte';
  import { debounce } from '@flekschas/utils';
  import Modal from 'svelte-simple-modal';

  import Editor from './Editor.svelte';
  import * as stores from './stores';
  import { STORAGE_KEY, STORAGE_SAVE_DEBOUNCE } from './constants';
  import { saveStores, serializeStores } from './utils';

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

<Modal>
  <Editor />
</Modal>
