import { get, writable } from 'svelte/store';
import { identity } from '@flekschas/utils';

import { STORAGE_KEY, STORAGE_KEY_PILING_STATE } from './constants';

/**
 * Read a loaded JSON file.
 *
 * @param {object} file - File object to be read.
 * @return {object} JS object.
 */
export const readJsonFile = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.addEventListener('load', (event) => {
      let json;

      try {
        json = JSON.parse(event.target.result);
      } catch (e) {
        reject(e);
      }

      resolve(json);
    });

    reader.readAsText(file);
  });
};

export const serializeStores = (stores) =>
  stores
    ? Object.entries(stores).reduce((obj, [name, store]) => {
      obj[name] = store.serialize();
      return obj;
    }, {})
    : null;

export const loadStores = (storageKey) => {
  let savedStores = sessionStorage.getItem(storageKey);

  try {
    savedStores = JSON.parse(savedStores);
  } catch (error) {
    savedStores = null;
    sessionStorage.setItem(storageKey, 'null');
    console.warn('Saved store was corrupted. We purged it to start fresh.');
  }

  return savedStores;
};

export const saveStores = (serializedStores) => {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(serializedStores));
};

export const serializableWritable = (initialValue, customSerializer = null) => {
  const store = writable(initialValue);
  const serialize = () => (customSerializer || identity)(get(store));

  return {
    subscribe: store.subscribe,
    set: store.set,
    update: store.update,
    serialize,
  };
};

export const loadParametersFromUrl = () => new URLSearchParams(window.location.search);

export const urlParameter = (initialValue, customSerializer = null) => {
  const store = writable(initialValue);
  const serialize = () => (customSerializer || identity)(get(store));
  const setUrlParameter = (newValue) => {
    // add parameter to URL when it is set
    let queryParams = new URLSearchParams(window.location.search);
    queryParams.set(Object.keys(initialValue)[0], newValue);
    history.replaceState(null, null, "?" + queryParams.toString());
    store.set(newValue);
  }
  const updateUrlParameter = (fn) => {
    let queryParams = new URLSearchParams(window.location.search);
    queryParams.set(Object.keys(initialValue)[0], newValue);
    history.replaceState(null, null, "?" + queryParams.toString());
    store.update(fn);
  }
  return {
    subscribe: store.subscribe,
    set: setUrlParameter,
    update: updateUrlParameter,
    serialize,
  };
};

export const resetStores = () => {
  sessionStorage.removeItem(STORAGE_KEY);
  sessionStorage.removeItem(STORAGE_KEY_PILING_STATE);
};