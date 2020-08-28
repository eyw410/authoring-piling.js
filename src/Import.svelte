<script>
import { getContext } from 'svelte';
import Papa from 'papaparse';
import Icon from '@smui/textfield/icon/index';
import { readJsonFile } from './utils';

import { components } from './stores';

export let refreshHandler;

let data = JSON.parse($components[1].source || '[]');
let dragover = false;
let files;
let error;

const { close } = getContext('simple-modal');

const dragenterHandler = () => {
  dragover = true;
};

const dragleaveHandler = async () => {
  dragover = false;
};

const dropHandler = (event) => {
  event.preventDefault();
  error = '';

  dragover = false;
  files = event.dataTransfer.files;
};

const filesSubmit = (event) => {
  if (event) event.preventDefault();

  if (files.length) {
  switch (files[0].type) {
    case 'application/json':
      readJsonFile(files[0])
        .then((newData) => {
          data = newData;
          onSuccess();
        })
        .catch((error) => {
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
        error: (error) => {
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
    height: 300px;
    border: 2px dashed gray;
  }
  .fileLabel input[type="file"] {
    position: absolute;
    top: -1000px;
  }
  .fileLabel {
    border-radius: 10px;
    background: #DDD;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .fileLabel:hover {
    background: #CCF;
  }
  .fileLabel:active {
    background: #BBE;
  }
  .importForm .error {
    color: #9c273e;
    margin-bottom: 20px;
  }
  .iconWrapper {
    text-align: center;
  }
  .fileLabel :global(.addButton) {
    font-size: 48pt !important;
  }

  .fileLabel .content {
    margin: auto;
    text-align: center;
  }
</style>

<form class='importForm' on:submit={filesSubmit}>
  {#if error}
  <div class="error">{error}</div>
  {/if}
  <label class="fileLabel import"
    on:dragenter={dragenterHandler}
    ondragover="return false"
    on:drop={dropHandler}>
    <div class="content">
      <input type="file" bind:files={files} />
      <div class="iconWrapper">
        <Icon class="material-icons addButton">add_circle_outline</Icon>
      </div>
      <div>
        Drag and drop or click to upload data (.csv, .tsv, .json)
      </div>
    </div>
  </label>
  {#if files}
    <ul>
      {#each files as file}
        { file.name }
      {/each}
    </ul>
  {/if}
</form>
