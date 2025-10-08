<script lang="ts">
    import { cn } from "@/utils";
    import type { HTMLAttributes } from "svelte/elements";

    interface $$Props extends HTMLAttributes<HTMLDivElement> {
        class?: string;
    }
    
    let { class: userClass = "", ...restProps } = $$props;
</script> 

<div
    class={cn("rounded-base flex flex-col shadow-shadow border-2 gap-6 py-6 border-border bg-background text-foreground font-base", userClass)}
    {...restProps}
> 
    <slot />
</div>