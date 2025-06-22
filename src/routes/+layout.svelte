<script lang="ts">
    import NavBar from '@/components/app/navbar.svelte';
	import '../app.css';
    import { browser } from '$app/environment';
	
	let { children } = $props();
</script>

<div class="flex flex-col h-screen">
	<NavBar />
	{@render children()}
</div>