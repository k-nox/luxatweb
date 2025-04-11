<script lang="ts">
	import AnimatedLink from '$lib/components/animated-link.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>lux@web</title>
</svelte:head>

<div class="flex h-full flex-col items-center justify-center text-center text-lg/loose">
	<h1 class="bol text-8xl/snug">hi, i'm lux</h1>
	<p class="">a software engineer, occassional poet, and communication nerd</p>
	<div class="flex justify-evenly gap-4">
		{#each data.links as { url, text } (url + text)}
			<AnimatedLink {url} {text} />
		{/each}
	</div>
</div>
