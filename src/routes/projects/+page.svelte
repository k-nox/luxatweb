<script lang="ts">
	import AnimatedLink from '$lib/components/animated-link.svelte';
	import { fade } from 'svelte/transition';
</script>

<div class="m-auto h-full text-lg/relaxed" in:fade>
	<h1 class="text-iris text-4xl/relaxed font-bold">projects</h1>
	<ul class=" list-inside list-disc">
		<li>
			<AnimatedLink text="aoc" href="https://github.com/k-nox/aoc" /> - an opinionated CLI for working
			on <AnimatedLink text="Advent of Code" href="https://adventofcode.com" /> puzzles in Go.
		</li>
		<li>
			<AnimatedLink text="dwnld" href="https://github.com/k-nox/dwnld" /> - a GUI for easier interaction
			with <AnimatedLink text="yt-dlp" href="https://github.com/yt-dlp/yt-dlp" />, powered by <AnimatedLink
				text="Wails"
				href="https://wails.io"
			/>
			and <AnimatedLink text="Svelte 5/SvelteKit" href="https://svelte.dev" />.
		</li>
		<li>
			<AnimatedLink text="creative coding" href="https://github.com/k-nox/creative-coding" /> - a collection
			of simple creative coding exercises
		</li>
	</ul>
</div>
