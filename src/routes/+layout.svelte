<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';
	import { MediaQuery } from 'svelte/reactivity';
	import ThemeDropdown from './theme-dropdown.svelte';
	import type { Theme, ThemeChoice } from './theme';

	const getTheme = () => {
		if (browser) {
			const theme = localStorage.getItem('theme');
			if (theme !== null && (theme === 'light' || theme === 'dark')) {
				return theme;
			}
		}
		return new MediaQuery('prefers-color-scheme: dark', true).current ? 'dark' : 'light';
	};

	let theme: Theme = $state(getTheme());

	const setTheme = (choice: ThemeChoice) => {
		if (choice === 'system') {
			localStorage.removeItem('theme');
		} else {
			localStorage.setItem('theme', choice);
		}
		theme = getTheme();
	};

	$effect(() => {
		if (browser) {
			const html = document.getElementsByTagName('html')[0];
			if (html.getAttribute('data-theme') !== theme) {
				html.setAttribute('data-theme', theme);
			}
		}
	});

	let { children } = $props();
</script>

<div>
	<header>
		<ThemeDropdown {theme} {setTheme} />
	</header>
	{@render children()}
</div>
