<script>
    import CopyButton from "./copy-button.svelte";

    let { text } = $props();
</script>


<pre class="relative bg-black border-2 border-border code text-sm max-h-[300px] overflow-auto p-4 not-prose text-white shadow-shadow font-mono">{text}<CopyButton content={text} /></pre>
