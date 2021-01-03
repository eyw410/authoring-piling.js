import clone from 'just-clone';

import { STORAGE_KEY, DEFAULT_COMPONENTS, DEFAULT_AUTORUN, DEFAULT_DEBUG, DEFAULT_LOADWITHOUTSAVEDPILES } from './constants';
import { serializableWritable, loadStores, loadParametersFromUrl, urlParameter } from './utils';

const _debug = loadParametersFromUrl().get("debug") || DEFAULT_DEBUG;
export const debug = urlParameter(_debug);

const prevStore = _debug ? {} : loadStores(STORAGE_KEY) || {};
const _components = clone(prevStore.components || DEFAULT_COMPONENTS);
const _selectedComponent = prevStore.selectedComponent
  ? _components.find(
    (file) =>
      file.name === prevStore.selectedComponent.name &&
      file.type === prevStore.selectedComponent.type
  ) || _components[0]
  : _components[0];
const _autoRun = prevStore.autoRun || DEFAULT_AUTORUN;
const _loadWithoutSavedPiles = prevStore.loadWithoutSavedPiles || DEFAULT_LOADWITHOUTSAVEDPILES;
export const loadWithoutSavedPiles = serializableWritable(_loadWithoutSavedPiles);

export const components = serializableWritable(_components);
export const selectedComponent = serializableWritable(
  _selectedComponent,
  (value) => {
    const clonedValue = clone(value);
    // We only need to store the name and extension as the source is already
    // stored in `components` and would unnecessarily blow up the data
    delete clonedValue.source;
    return clonedValue;
  }
);
export const autoRun = serializableWritable(_autoRun);