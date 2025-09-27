<script>
    import CopyButton from "./copy-button.svelte";

    let { text } = $props();
</script>


<pre class="relative bg-black border-2 border-border code text-sm overflow-auto p-4 not-prose text-white shadow-shadow whitespace-normal">
    {text}
    <CopyButton content={text} />
</pre>
