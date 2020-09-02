<script>
import { getContext } from 'svelte';
import Papa from 'papaparse';
import Icon from '@smui/textfield/icon/index';
import { readJsonFile } from './utils';

import { components } from './stores';

export let refreshHandler;

let data = JSON.parse($components[1].source || '[]');
let dragOver = false;
let files;
let error;

const { close } = getContext('simple-modal');

const dragEnterHandler = (event) => {
  dragOver = true;
};

const dragLeaveHandler = () => {
  dragOver = false;
};

const dropHandler = (event) => {
  event.preventDefault();
  error = '';
  dragOver = false;
  files = event.dataTransfer.files;
};

const filesSubmit = () => {
  if (files.length) {
    switch (files[0].type) {
      case 'application/json':
        readJsonFile(files[0])
          .then((newData) => {
            data = newData;
            onSuccess();
          })
          .catch(() => {
            error = 'Invalid JSON file';
          });
        break;
      case 'text/csv':
      case 'text/tab-separated-values':
        Papa.parse(files[0], {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            data = results.data;
            onSuccess();
          },
          error: () => {
            error = 'Invalid CSV or TSV file';
          }
        });
        break;
      default:
        error = 'Unsupported file type'
        break;
    }
  } else {
    error = 'Only drop files'
  }
}

$: if (files) {
  filesSubmit(null);
}

const onSuccess = () => {
  components.update((_components) => {
    _components[1].source = JSON.stringify(data, null, 2);
    return _components;
  });
  refreshHandler();
  close();
}
</script>

<style>
  .import {
    height: 20rem;
    border: 1px dashed gray;
  }

  .importForm {
    position: relative;
  }

  .fileLabel input[type="file"] {
    display: none;
  }

  .fileLabel {
    border-radius: 0.5rem;
    background: var(--gray-lightest);
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .fileLabel.dragOver {
    background: var(--pink-light);
  }

  .importForm .error {
    color: #9c273e;
    margin-bottom: 20px;
  }

  .iconWrapper {
    text-align: center;
  }

  .fileLabel :global(.addButton) {
    font-size: 3rem;
  }

  .fileLabel .content {
    margin: auto;
    text-align: center;
  }

  .drag-leave-layer {
    display: none;
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .dragOver .drag-leave-layer {
    display: block;
  }
</style>

<div class="importForm">
  {#if error}
    <div class="error">{error}</div>
  {/if}
  <label
    class="fileLabel import"
    class:dragOver
    on:drop={dropHandler}
    on:dragenter={dragEnterHandler}
    ondragOver="return false"
  >
    <div class="content">
      <input type="file" bind:files={files} />
      <div class="iconWrapper">
        <Icon class="material-icons addButton">add_circle_outline</Icon>
      </div>
      <div>
        Drag and drop or click to upload data (.csv, .tsv, .json)
      </div>
    </div>
    <div class="drag-leave-layer" on:dragleave={dragLeaveHandler} />
  </label>
</div>
