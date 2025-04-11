<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';
	import { MediaQuery } from 'svelte/reactivity';
	import ThemeDropdown from '$lib/components/theme-dropdown.svelte';
	import type { DropdownItem, Theme, ThemeChoice } from '$lib/types';
	import type { LayoutProps } from './$types';
	import AnimatedLink from '$lib/components/animated-link.svelte';
	import { page } from '$app/state';
	import { fade } from 'svelte/transition';
	import { Menu } from 'lucide-svelte';
	import IconDropdown from '$lib/components/icon-dropdown.svelte';

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
	let navItems: DropdownItem[] = $derived(data.links.map((item) => ({ ...item, type: 'anchor' })));
</script>

{#snippet nav()}
	<nav class="hidden sm:flex sm:flex-wrap sm:justify-evenly sm:gap-4" in:fade>
		{#each data.links as { href, text } (href + text)}
			<AnimatedLink {href} {text} />
		{/each}
	</nav>
{/snippet}

{#snippet mobileNav()}
	<span class="sm:hidden">
		<IconDropdown items={navItems}>
			{#snippet icon()}
				<Menu class="h-6 w-6" />
			{/snippet}
		</IconDropdown>
	</span>
{/snippet}

<div class="selection:bg-hlmed px-4">
	<header>
		<div class="flex h-20 items-center justify-between">
			<AnimatedLink href="/" text="lux@web" />
			<div class="flex items-center gap-2">
				{#if !isHomePage}
					{@render nav()}
				{/if}
				{@render mobileNav()}
				<ThemeDropdown {theme} {setTheme} />
			</div>
		</div>
	</header>
	<div
		class={[
			isHomePage && 'justify-center',
			'm-auto flex h-[calc(100vh-80px)] w-full flex-col transition-[width] duration-500 ease-in-out sm:w-xl'
		]}
	>
		<div>
			{@render children()}
		</div>
		{#if isHomePage}
			{@render nav()}
		{/if}
	</div>
</div>
