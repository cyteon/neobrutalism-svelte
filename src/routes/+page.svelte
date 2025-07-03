<script lang="ts">
    import { ArrowUpRight } from "lucide-svelte";
    import Star9 from "@/components/stars/star9.svelte";
</script>

<div class="h-full text-foreground font-base prose-headings:font-heading prose-h1:2xl:text-6xl prose-h1:xl:text-5xl prose-h1:md:text-5xl prose-h1:sm:text-[33px] prose-h1:text-2xl prose-h2:2xl:text-4xl prose-h2:lg:text-4xl prose-h2:md:text-3xl prose-h2:text-2xl prose-h3:2xl:text-4xl prose-h3:xl:text-3xl prose-h3:lg:text-3xl prose-h3:md:text-2xl prose-h3:sm:text-xl">
    <main class="h-full grid-bg grid-bg-big relative flex flex-col overflow-hidden items-center justify-center bg-background px-5 md:py-[200px] py-[100px]">
    
        <!--
        <HeroComponents class="xl:-left-[130px] md:-left-[200px] lg:block hidden" />
        <HeroComponents
            class="xl:-right-[130px] md:-right-[200px] lg:block hidden"
            reverse
        />
        -->

        <div class="mx-auto w-container max-w-full">
            <div class="flex flex-col items-center text-center">
                <h1 class="leading-normal">
                    Get started with creating <br />{" "}
                    <span class="relative px-2 sm:mr-2 mr-0 md:[&_svg]:size-[45px] sm:[&_svg]:size-7 bg-main/50 rounded-base border-2 border-border/40 dark:border-border/70">
                        neobrutalism<!-- this fixed a whitespace issue somhow
                        --><Star9
                            className="absolute sm:block hidden md:-bottom-4 md:-right-5 -bottom-2.5 -right-2.5"
                            color="var(--main)"
                            pathClassName="stroke-5 dark:stroke-3.5 stroke-black dark:stroke-black/70"
                        /><!-- this too
                        --><Star9
                            className="absolute sm:block hidden md:-top-4 md:-left-5 -top-2.5 -left-2.5"
                            color="var(--main)"
                            pathClassName="stroke-5 dark:stroke-3.5 stroke-black dark:stroke-black/70"
                        />
                    </span>
                    layouts in svelte.
                </h1>

                <p class="leading-snug w-full md:mt-[50px] md:mb-[60px] sm:mt-12 my-9 sm:mb-10 2xl:text-3xl xl:text-2xl lg:text-2xl xl:w-full lg:w-2/3 md:w-full md:text-2xl sm:text-xl text-xl">
                    A collection of neobrutalism-styled components based on shadcn/ui.
                </p>

                <a
                    class="flex items-center gap-2.5 w-max text-main-foreground rounded-base border-2 border-border bg-main md:px-10 px-4 md:py-3 py-2 md:text-[22px] text-base shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
                    href="/docs"
                >
                    Read the docs
                    <ArrowUpRight class="md:size-[30px] size-5" />
                </a>
            </div>
        </div>
    </main>
</div>