<script>
    import Button from "$lib/components/ui/button.svelte";
    import { MousePointerClickIcon } from "lucide-svelte";
</script>

<Button onclick={() => alert("Button clicked!")}>
    <MousePointerClickIcon /> Click me!
</Button>