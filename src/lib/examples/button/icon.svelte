<script>
    import Button from "$lib/components/ui/button.svelte";
    import { EllipsisIcon } from "lucide-svelte";
</script>

<Button onclick={() => alert("Button clicked!")}>
    <EllipsisIcon />
</Button>