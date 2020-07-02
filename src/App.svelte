<script>
  import "../theme/_smui-theme.scss";
  import Button from "@smui/button";

  import clone from "just-clone";
  import { onMount, onDestroy, tick } from "svelte";

  $: svelteUrl = `https://unpkg.com/svelte@latest`;
  //  process.browser && version === "local"
  //   ? `${location.origin}/repl/local`
  //   : `https://unpkg.com/svelte@${version}`;

  export let name;
  export let height = "800px";
  export let data = {
    title: "State Machine with Actions - The Final Result",
    components: [
      {
        type: "svelte",
        name: "App",
        source: ""
      }
    ]
  };
  export let id = "pickle";
  export let expandedWidth = true;
  let container;
  let repl;
  let windowWidth;
  onMount(async () => {
    let Repl = (await import("@sveltejs/svelte-repl")).default;
    repl = new Repl({
      target: container,
      props: {
        id,
        svelteUrl,
        workersUrl: "workers",
        orientation: windowWidth > 600 ? "columns" : "rows"
      }
    });
  });
  onDestroy(() => {
    if (repl) {
      repl.$destroy();
    }
  });
  async function updateOrientation(w) {
    // Occasionally the REPL gets a bit screwed up if we set orientation while it's still
    // intializing, so wait a tick.
    await tick();
    repl.$set({ orientation: w > 600 ? "columns" : "rows" });
  }
  $: ({ title, ...replData } = data);
  $: repl && repl.set(clone(replData));
  $: repl && updateOrientation(windowWidth);

  function reset() {
    repl.update(clone(replData));
  }
</script>

<svelte:window bind:innerWidth={windowWidth} />
<main>
	<div class="repl-outer">
		<div class="viewport">
			<div class:w-expanded-95={expandedWidth}>
					<div
						class="flex flex-col font-sans border border-gray-100 shadow-md rounded-lg">
						<div
							class="flex px-4 py-2 text-teal-800 border-b border-gray-200 items-start
							sm:items-stretch">
							<span class="ml-auto inline-flex rounded-md shadow-sm">
								<button
									type="button"
									class="inline-flex items-center px-2.5 py-1.5 border border-gray-300
									text-xs leading-4 font-medium rounded text-gray-700 bg-white
									hover:text-gray-500 focus:outline-none focus:border-blue-300
									focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50
									transition ease-in-out duration-150"
									on:click={reset}>
									Reset
								</button>
							</span>
						</div>
						<div class="svelte-repl" style="height:{height};" bind:this={container} />
					</div>
				</div>
		</div>
	</div>
</main>

<style>
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
	  background-color: #fff;
	  --font: "Inter", "Open Sans", "Helvetica", "Verdana", sans-serif;
	  --font-mono: "Inconsolata", "Menlo", "Monaco", "Consolas", "Liberation Mono",
	    "Courier New", monospace;
	  --prime: rgb(3, 102, 114);
	  --second: #676778;
	  --back-light: #f6fafd;
	}
</style>

<!--
	.repl-outer {
	  background-color: #fff;
	  --font: "Inter", "Open Sans", "Helvetica", "Verdana", sans-serif;
	  --font-mono: "Inconsolata", "Menlo", "Monaco", "Consolas", "Liberation Mono",
	    "Courier New", monospace;
	  --prime: rgb(3, 102, 114);
	  --second: #676778;
	  --back-light: #f6fafd;
	}

	.repl-outer {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		max-height: 100vh;
		background-color: var(--back);
		overflow: hidden;
		box-sizing: border-box;
		--pane-controls-h: 4.2rem;
	}
-->