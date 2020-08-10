<script>
  import Example from './Example.svelte';
  const booksUrl = '73dd0de929033ddadb0313fa46257835';
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
        <Example url={booksUrl} />
      </li>
      <li>
        <Example url='' />
      </li>
      <li>
        <Example url='' />
      </li>
      <li>
        <Example url='' />
      </li>
      <li>
        <Example url='' />
      </li>
      <li>
        <Example url='' />
      </li>
    </ul>
  </li>
  <li>
    <h2 class="mdc-typography--headline6">Matrices / Heatmaps</h2>
    <ul>
      <li>
        <Example url='' />
      </li>
      <li>
        <Example url='' />
      </li>
      <li>
        <Example url='' />
      </li>
      <li>
        <Example url='' />
      </li>
      <li>
        <Example url='' />
      </li>
      <li>
        <Example url='' />
      </li>
    </ul>
  </li>
  <li>
    <h2 class="mdc-typography--headline6">Scatterplots</h2>
    <ul>
      <li>
        <Example url='' />
      </li>
      <li>
        <Example url='' />
      </li>
      <li>
        <Example url='' />
      </li>
      <li>
        <Example url='' />
      </li>
      <li>
        <Example url='' />
      </li>
      <li>
        <Example url='' />
      </li>
    </ul>
  </li>
  <li>
    <h2 class="mdc-typography--headline6">Line-Area Charts</h2>
    <ul>
      <li>
        <Example url='' />
      </li>
      <li>
        <Example url='' />
      </li>
      <li>
        <Example url='' />
      </li>
      <li>
        <Example url='' />
      </li>
      <li>
        <Example url='' />
      </li>
      <li>
        <Example url='' />
      </li>
    </ul>
  </li>
</ol>
