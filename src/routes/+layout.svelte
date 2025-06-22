<script lang="ts">
    import NavBar from '@/components/app/NavBar.svelte';
	import '../app.css';
	
	let { children } = $props();
</script>

<div>
	<NavBar />
	{@render children()}
</div>