import clone from 'just-clone';

import { STORAGE_KEY, DEFAULT_COMPONENTS, DEFAULT_AUTORUN, DEFAULT_DEBUG } from './constants';
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

const _tabId = prevStore.tabId || Math.random().toString(20).substr(2, 8);

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

export const tabId = serializableWritable(_tabId);

const _prevPilingState = prevStore.prevPilingState || null;
export const prevPilingState = serializableWritable(_prevPilingState);