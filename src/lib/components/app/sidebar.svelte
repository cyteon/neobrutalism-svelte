<script lang="ts">
    import { browser } from "$app/environment";
    import { onMount } from "svelte";
    import { page } from "$app/stores";

    const links = [
        "Getting started",
        /*{
            href: "/docs/migrating-from-v3",
            text: "Migrating from V3",
        },*/
        {
            href: "/docs/introduction",
            text: "Introduction",
        },
        {
            href: "/docs/installation",
            text: "Installation",
        },
        {
            href: "/docs/resources",
            text: "Resources",
        },
        /*{
            href: "/docs/figma",
            text: "Figma",
        },*/
        {
            href: "/docs/changelog",
            text: "Changelog",
        },
        "Components",
        {
            href: "/docs/button",
            text: "Button",
        }
        /*"Stars",
        {
            href: "/docs/stars",
            text: "Installation",
        },*/
    ]

    $: path = $page.url.pathname;
</script>

<aside class="scrollbar top-[70px] bg-secondary-background h-[calc(100svh-70px)] max-h-[calc(100svh-70px)] w-[250px] overflow-y-auto border-r-4 lg:block hidden border-border">
    {#each links as link, id}
        {#if typeof link === "string"}
            <div
                id={id}
                class="block border-b-4 border-border p-4 text-xl font-heading"
            >
                {link}
            </div>
        {:else}
            <a
                id={id}
                href={link.href}
                class={`
                    block border-b-4 border-border p-4 pl-7 text-lg font-base text-foreground/90 hover:bg-main/70 hover:text-main-foreground
                    ${link.href == path ? "bg-main text-main-foreground hover:bg-main" : ""}
                `}
            >
                {link.text}
            </a>
        {/if}
    {/each}
</aside>