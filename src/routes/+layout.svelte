<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';
	import { MediaQuery } from 'svelte/reactivity';
	import ThemeDropdown from '$lib/components/theme-dropdown.svelte';
	import type { Theme, ThemeChoice } from '$lib/types';
	import type { LayoutProps } from './$types';
	import AnimatedLink from '$lib/components/animated-link.svelte';
	import { page } from '$app/state';

	const systemPrefersDark = new MediaQuery('prefers-color-scheme: dark', true);

	let theme: Theme = $derived.by(() => {
		if (browser) {
			const theme = localStorage.getItem('theme');
			if (theme !== null && (theme === 'light' || theme === 'dark')) {
				return theme;
			}
		}
		return systemPrefersDark.current ? 'dark' : 'light';
	});

	const setTheme = (choice: ThemeChoice) => {
		if (choice === 'system') {
			localStorage.removeItem('theme');
			theme = systemPrefersDark.current ? 'dark' : 'light';
		} else {
			localStorage.setItem('theme', choice);
			theme = choice;
		}
	};

	$effect(() => {
		if (browser) {
			document.documentElement.classList.toggle('dark', theme === 'dark');
		}
	});

	let isHomePage = $derived(page.route?.id === '/');

	let { data, children }: LayoutProps = $props();
</script>

<div class="px-4">
	<header>
		<div class="flex h-20 items-center justify-between">
			<AnimatedLink url="/" text="lux@web" />
			<div class="flex items-center gap-2">
				{#if !isHomePage}
					<nav class="flex gap-4">
						{#each data.links as { url, text } (url + text)}
							<AnimatedLink {url} {text} />
						{/each}
					</nav>
				{/if}
				<ThemeDropdown {theme} {setTheme} />
			</div>
		</div>
	</header>
	<div class="h-[calc(100vh-80px)]">
		{@render children()}
	</div>
</div>
