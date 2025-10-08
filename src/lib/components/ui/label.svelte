<script lang="ts">
    import { cn } from "@/utils";
    import type { HTMLLabelAttributes } from "svelte/elements";

    interface $$Props extends HTMLLabelAttributes {
        class?: string;
    }
    
    let { class: userClass = "", ...restProps } = $$props;
</script> 

<label
    class={cn("text-sm font-heading leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", userClass)}
    {...restProps}
> 
    <slot />
</label>