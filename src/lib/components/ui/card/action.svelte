<script lang="ts">
    import { cn } from "@/utils";
    import type { HTMLAttributes } from "svelte/elements";

    interface $$Props extends HTMLAttributes<HTMLDivElement> {
        class?: string;
    }
    
    let { class: userClass = "", ...restProps } = $$props;
</script> 

<div
    class={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", userClass)}
    {...restProps}
> 
    <slot />
</div>