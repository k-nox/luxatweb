<script>
	import AnimatedLink from '$lib/components/animated-link.svelte';
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>lux@web | about</title>
</svelte:head>

<div class="m-auto h-full text-lg/relaxed" in:fade>
	<h1 class="text-4xl/relaxed font-bold">about me</h1>
	<p class="pt-4">
		Hi! I'm Lux Barker (they/them). I'm a software developer with experience developing high-volume
		APIs in Go and Node.js. Recently, I've been expanding my skills into the front-end with Svelte
		and TypeScript.
	</p>

	<p class="pt-4">
		Take a look at my <AnimatedLink url="/projects" text="projects" /> if you're interested in seeing
		examples of my work.
	</p>
</div>
