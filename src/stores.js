import clone from 'just-clone';

import { STORAGE_KEY, DEFAULT_COMPONENTS, DEFAULT_AUTORUN, DEFAULT_ALWAYS_PRESERVE_PILES } from './constants';
import { serializableWritable, loadStores } from './utils';

const prevStore = loadStores(STORAGE_KEY) || {};
const _components = clone(prevStore.components || DEFAULT_COMPONENTS);
const _selectedComponent = prevStore.selectedComponent
  ? _components.find(
    (file) =>
      file.name === prevStore.selectedComponent.name &&
      file.type === prevStore.selectedComponent.type
  ) || _components[0]
  : _components[0];
const _autoRun = prevStore.autoRun || DEFAULT_AUTORUN;
const _alwaysPreservePiles = prevStore.alwaysPreservePiles || DEFAULT_ALWAYS_PRESERVE_PILES;

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
export const alwaysPreservePiles = serializableWritable(_alwaysPreservePiles);