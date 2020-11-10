<script>
  import Example from './Example.svelte';
  const booksGistId = '73dd0de929033ddadb0313fa46257835';
  const ridgePlotGistId = '81e7fb4f9cf5946f12639c383af97dc6';
  const matrixGistId = '0bee19015958e5677a1fb476712b3803';

  export let refreshHandler;
</script>

<style>
  ol,
  ul {
    padding: 0;
    list-style: none;
  }

  ol {
    margin: 1rem 0;
  }

  ul {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(4, 1fr);
  }
</style>

<ol>
  <li>
    <h2 class="mdc-typography--headline6">Images / Photos</h2>
    <ul>
      <li>
        <Example gistId={booksGistId} refreshHandler={refreshHandler} />
      </li>
    </ul>
  </li>
  <li>
    <h2 class="mdc-typography--headline6">Information Visualization</h2>
    <ul>
      <li>
        <Example gistId={ridgePlotGistId} refreshHandler={refreshHandler} />
      </li>
      <li>
        <Example gistId={matrixGistId} refreshHandler={refreshHandler} />
      </li>
    </ul>
  </li>
</ol>
