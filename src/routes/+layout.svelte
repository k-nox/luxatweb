<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';
	import { MediaQuery } from 'svelte/reactivity';
	import ThemeDropdown from './theme-dropdown.svelte';
	import type { Theme, ThemeChoice } from './theme';

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

	let { children } = $props();
</script>

<div>
	<header>
		<div class="px-4">
			<div class="flex h-20 items-center justify-between">
				<div>lux@web</div>
				<div>
					<ThemeDropdown {theme} {setTheme} />
				</div>
			</div>
		</div>
	</header>
	<div class="h-[calc(100vh-80px)]">
		{@render children()}
	</div>
</div>
