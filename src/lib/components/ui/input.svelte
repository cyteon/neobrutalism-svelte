<script lang="ts">
    import { cn } from "@/utils";
    import type { HTMLButtonAttributes } from "svelte/elements";

    interface $$Props extends HTMLButtonAttributes {
        class?: string;
    }
    
    let { class: userClass = "", ...restProps } = $$props;
</script> 

<input
    class={
        cn(
            "flex h-10 w-full rounded-base border-2 border-border bg-secondary-background selection:bg-main selection:text-main-foreground px-3 py-2 text-sm font-base text-foreground file:border-0 file:bg-transparent file:text-sm file:font-heading placeholder:text-foreground/50 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            userClass
        )
    }
    data-slot="input"
    {...restProps}
/>