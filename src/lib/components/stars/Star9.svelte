<script lang="ts">
    let { size, width = 200, height = 200, color, stroke = "currentColor", strokeWidth = 1.5, className = "", pathClassName = "" } = $props();
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 200 200"
    width={size ?? width}
    height={size ?? height}
    class={className}
>
    <path
    fill={color ?? "currentColor"}
    stroke={stroke}
    stroke-width={strokeWidth}
    class={pathClassName}
    d="M195 100c-87.305 4.275-90.725 7.695-95 95-4.275-87.305-7.695-90.725-95-95 87.305-4.275 90.725-7.695 95-95 4.275 87.305 7.695 90.725 95 95"
    />
</svg>