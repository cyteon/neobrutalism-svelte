<script lang="ts">
    import CopyButton from "./copy-button.svelte";

    let { code, component } = $props();
    let showPreview = $state(true);
</script>

<div class="border border-border shadow-shadow flex sm:h-12 h-10 font-semibold mt-6">
    <button 
        class={`
            h-full transition-all w-full px-2 py-1 border
            ${showPreview ? "text-main-foreground bg-main border-border" : ""} 
        `}       
        onclick={() => (showPreview = true)}
    >
        Preview
    </button>

    <button 
        class={`
            h-full transition-all w-full px-2 py-1 border
            ${showPreview ? "" : "text-main-foreground bg-main border-border"} 
        `}
        onclick={() => (showPreview = false)}
    >
        Code
    </button>
</div>

{#if showPreview}
    <div class="grid not-prose flex w-full items-center justify-center z-15 relative border-2 mb-5 min-h-[200px] border-border border-t-1 sm:px-10 px-5 sm:py-20 py-10 shadow-shadow bg-white">
        {@render component()}
    </div>
{:else}
    <pre class="relative bg-black border-2 border-border code text-sm max-h-[300px] overflow-auto p-4 not-prose text-white shadow-shadow font-mono">{code}<CopyButton content={code} /></pre>
{/if}