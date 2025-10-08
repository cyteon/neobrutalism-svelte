<script lang="ts">
    import { cn } from "@/utils";
    import type { HTMLAttributes } from "svelte/elements";

    interface $$Props extends HTMLAttributes<HTMLDivElement> {
        class?: string;
    }
    
    let { class: userClass = "", ...restProps } = $$props;
</script> 

<div
    class={cn("text-sm font-base", userClass)}
    {...restProps}
> 
    <slot />
</div>