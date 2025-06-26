<script lang="ts">
    import { browser } from "$app/environment";
    import CopyButton from "./copy-button.svelte";

    let { component } = $props();
    let view: "npm" | "pnpm" | "yarn" | "bun" = $state("npm");

    let url = $state("https://nbsv.cyteon.dev");

    if (browser) {
        url = window.location.origin;
    }

    let text = $derived(() => {
        if (view == "npm" || view == "yarn") {
            return `npx shadcn-svelte@latest add ${url}/r/${component}.json`;
        } else if (view == "pnpm") {
            return `pnpm dlx shadcn-svelte@latest add ${url}/r/${component}.json`;
        } else if (view == "bun") {
            return `bunx --bun shadcn-svelte@latest add ${url}/r/${component}.json`;
        }
    })
</script>

<div class="border border-border shadow-shadow flex sm:h-12 h-10 font-semibold mt-6">
    <button 
        class={`
            h-full transition-all w-full px-2 py-1 border
            ${view == "npm" ? "text-main-foreground text-main-foreground bg-main border-border" : ""} 
        `}       
        onclick={() => (view = "npm")}
    >
        npm
    </button>

    <button 
        class={`
            h-full transition-all w-full px-2 py-1 border
            ${view == "pnpm" ? "text-main-foreground text-main-foreground bg-main border-border" : ""} 
        `}
        onclick={() => (view = "pnpm")}
    >
        pnpm
    </button>

    <button 
        class={`
            h-full transition-all w-full px-2 py-1 border
            ${view == "yarn" ? "text-main-foreground text-main-foreground bg-main border-border" : ""} 
        `}
        onclick={() => (view = "yarn")}
    >
        yarn
    </button>

    <button 
        class={`
            h-full transition-all w-full px-2 py-1 border
            ${view == "bun" ? "text-main-foreground text-main-foreground bg-main border-border" : ""} 
        `}
        onclick={() => (view = "bun")}
    >
        bun
    </button>
</div>

<pre class="relative bg-black border-2 border-border code text-sm overflow-auto p-4 not-prose text-white shadow-shadow whitespace-normal">
    {text()}
    <CopyButton content={text()}/>
</pre>
