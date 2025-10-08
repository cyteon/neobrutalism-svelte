<script lang="ts">
    import { cn } from "@/utils";
    import type { HTMLAttributes } from "svelte/elements";

    interface $$Props extends HTMLAttributes<HTMLDivElement> {
        class?: string;
    }
    
    let { class: userClass = "", ...restProps } = $$props;
</script> 

<div
    class={cn("flex items-center px-6 [.border-t]:pt-6", userClass)}
    {...restProps}
> 
    <slot />
</div>