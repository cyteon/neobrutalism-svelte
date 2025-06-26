<script lang="ts">
    import { Check, Clipboard } from "lucide-svelte";
    import Button from "../ui/button.svelte";

    let { content } = $props();
    let copied = $state(false);
</script>

<Button
      size="icon"
      class="size-9 absolute right-3.5 top-2 hover:cursor-pointer"
      variant="noShadow"
      aria-label="Copy"
      onclick={() => {
        navigator.clipboard.writeText(content);
        copied = true;
        setTimeout(() => (copied = false), 2000);
      }}
    >
      {#if copied}
        <Check />
      {:else}
        <Clipboard />
      {/if}
</Button>