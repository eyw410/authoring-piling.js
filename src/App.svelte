<script>
	import "../theme/_smui-theme.scss";
	import Button from "@smui/button";
	import Repl from "@sveltejs/svelte-repl";

	export let name;
	export let repl;

	$: svelteUrl = process.browser // && version === "local"
	  ? `${location.origin}/repl/local`
	  : `https://unpkg.com/svelte@${version}`;
	const rollupUrl = `https://unpkg.com/rollup@1/dist/rollup.browser.js`;

	$: mobile = width < 560;
</script>

<main>
	<h1>Hello {name}!</h1>
	<Button on:click={() => alert('Clicked!')}>Just a Button</Button>	
	<div class="repl-outer">
		<div class="viewport">
			{#if process.browser}
				<Repl
					bind:this={repl}
					workersUrl="workers"
					fixed={mobile}
					{svelteUrl}
					{rollupUrl}
					embedded
					relaxed
			/>
			{/if}
		</div>
	</div>
</main>

<style>
	main {
	  text-align: center;
	  padding: 1em;
	  max-width: 240px;
	  margin: 0 auto;
	}

	h1 {
	  color: #ff3e00;
	  text-transform: uppercase;
	  font-size: 4em;
	  font-weight: 100;
	}

	@media (min-width: 640px) {
	  main {
	    max-width: none;
	  }
	}

	.repl-outer {
	  position: relative;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
	  background-color: var(--back);
	  overflow: hidden;
	  box-sizing: border-box;
	  --pane-controls-h: 4.2rem;
	}
</style>