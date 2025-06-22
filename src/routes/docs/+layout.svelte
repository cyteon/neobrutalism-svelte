<script lang="ts">
    import Sidebar from '@/components/app/sidebar.svelte';
	
	let { children } = $props();
</script>

<div class="flex">
	<Sidebar />
	<div class="docs w-full bg-background h-[calc(100svh-70px)] overflow-y-auto">
      <div class="lg:ml-[200px] xl:mr-[200px] mr-0 ml-0 prose-p:text-foreground prose-p:mt-6 prose-headings:scroll-mt-32 prose-h1:mb-4 prose-ul:pl-5 prose-ul:list-disc prose-li:font-base sm:prose-li:text-base prose-li:text-sm prose-li:mt-2 lg:py-20 sm:py-16 py-12 leading-relaxed prose-h2:mt-10 prose-h2:mb-6 prose-h3:mt-8 prose-headings:font-heading sm:prose-h1:text-3xl prose-h1:text-2xl sm:prose-h2:text-2xl prose-h2:text-xl prose-h3:mb-6 sm:prose-h3:text-xl prose-h3:text-lg prose-p:leading-7 sm:prose-p:text-base prose-p:text-sm prose-p:font-base prose-code:px-[5px] prose-code:py-[3px] prose-a:underline prose-a:font-heading prose-code:rounded-base prose-code:font-bold prose-code:border prose-code:text-main-foreground prose-code:break-normal prose-code:text-sm prose-code:mx-0.5 prose-code:border-border prose-code:bg-main">
        <div class="mx-auto 2xl:max-w-[750px] max-w-[650px]">
        	<article>
				{@render children()}
        	</article>

			<!--
			<div class="mt-14">
              <Pagination {...paginationProps} />
            </div>
			-->

			<!--
			{!isTocEmpty && (
				<aside class="fixed bg-secondary-background border-l-4 not-prose border-l-border overflow-hidden top-[70px] xl:flex hidden flex-col justify-between right-0 w-[250px] h-[calc(100svh-70px)] overflow-y-auto">
					<TableOfContents items={tableOfContents} />
				</aside>
			)}
			-->
        	</div>
      	</div>
    </div>
</div>