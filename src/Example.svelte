<script>
  import { getContext } from 'svelte';
  import Card, { PrimaryAction, Media, MediaContent } from '@smui/card';
  import clone from 'just-clone';

  import { components, prevPilingState } from './stores';

  import { DEFAULT_COMPONENTS_NAMED } from './constants';

  export let userAndGistId = '';
  export let width = '10rem';
  export let refreshHandler;

  const { close } = getContext('simple-modal');

  let title = 'Loading...';
  let thumbnail = '';
  let fileContent = {};

  const contentParser = ({ output, filename, content }) => output[filename] = content;
  const metadataParser = ({ content, filename }) => {
    try {
      const metadata = JSON.parse(content);
      title = metadata.title || title;
      thumbnail = metadata.thumbnail || thumbnail;
    } catch (e) {
      console.error(`Could not parse metadata (${filename})`)
    }
  }

  const fileParsers = {
    '_meta.json': metadataParser,
    '_metadata.json': metadataParser,
    '_piling.json': metadataParser,
    '_pilingjs.json': metadataParser,
    'aggregators.js': contentParser,
    'data.js': contentParser,
    'data.json': contentParser,
    'groupArrange.js': contentParser,
    'renderers.js': contentParser,
    'styles.js': contentParser,
  }

  function parseFiles(files) {
    fileContent = Object.values(files).reduce((output, { filename, content }) => {
      if (fileParsers[filename]) {
        fileParsers[filename]({ output, filename, content });
      }
      return output;
    }, {
      'aggregators.js': '',
      'data.js': '',
      'data.json': '[]',
      'groupArrange.js': '',
      'renderers.js': '',
      'styles.js': ''
    });
  }

  function loadExample() {
    prevPilingState.update(() => null);

    components.update((_components) => {
      _components = [];

      Object.entries(DEFAULT_COMPONENTS_NAMED).forEach(([name, component]) => {
        const _component = clone(component);

        if (fileContent[name]) {
          _component.source = fileContent[name];
        }

        _components.push(_component);
      });

      return _components;
    });
    // Needs to trigger re-run
    close();
    refreshHandler();
  }

  $: if (userAndGistId) {
    Promise.all(Object.keys(fileParsers).map(f => {
      // return fetch('https://gist.githubusercontent.com/flekschas/81e7fb4f9cf5946f12639c383af97dc6/raw/renderers.js', { mode: 'no-cors' })
      return fetch(`https://gist.githubusercontent.com/${userAndGistId}/raw/${f}`)
              .then(async (response) => {
                const content = await response.text();
                return { filename: f, content, status: response.status }
              })
              .catch((error) => {
                return { filename: f, status: 404 }
              })
    }))
    .then((responses) => {
      // need to check whether each thing worked
      parseFiles(responses.filter(({ status }) => status === 200));
    })
    .catch((error) => {
      // something went wrong
      console.warn('Request failed', error);
    });
    
  }
</script>

<style>
  .example :global(.mdc-card) {
    position: relative;
    box-shadow: none;
  }

  .example :global(.mdc-card:before) {
    content: '';
    position: absolute;
    z-index: 1;
    display: block;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    pointer-events: none;
  }

  .example-title {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 2rem 1rem 1rem 1rem;
    color: white;
    background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
  }

  .example-title :global(.mdc-typography--headline6) {
    margin: 0;
  }
</style>

<div class="example">
  <Card style={`width: ${width}`}>
    <PrimaryAction on:click={loadExample}>
      <Media
        style={`background-image: url(${thumbnail});`}
        aspectRatio="square"
      >
        <MediaContent>
          <div class="example-title">
            <h2 class="mdc-typography--headline6">{ title }</h2>
          </div>
        </MediaContent>
      </Media>
    </PrimaryAction>
  </Card>
</div>
