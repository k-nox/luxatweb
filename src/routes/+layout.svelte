<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';
	import { MediaQuery } from 'svelte/reactivity';
	import { DropdownMenu } from 'bits-ui';
	import { Sun, Moon } from 'lucide-svelte/icons';

	const getTheme = () => {
		if (browser && 'theme' in localStorage) {
			return localStorage.getItem('theme');
		}
		return new MediaQuery('prefers-color-scheme: dark', true).current ? 'dark' : 'light';
	};

	let theme = $state(getTheme());

	const setTheme = (choice: 'light' | 'dark' | 'system') => {
		if (choice === 'system') {
			localStorage.removeItem('theme');
		} else {
			localStorage.setItem('theme', choice);
		}
		theme = getTheme();
	};

	let { children } = $props();
</script>

<div class="bg-dawn-base dark:bg-moon-base text-dawn-text dark:text-moon-text" data-theme={theme}>
	<header>
		<!-- <button onclick={() => (theme = theme === 'dark' ? 'light' : 'dark')}>switch theme</button> -->
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				{#if theme === 'light'}
					<Sun />
				{:else}
					<Moon />
				{/if}
			</DropdownMenu.Trigger>
			<DropdownMenu.Portal>
				<DropdownMenu.Content>
					<DropdownMenu.Item onSelect={() => setTheme('dark')}>dark</DropdownMenu.Item>
					<DropdownMenu.Item onSelect={() => setTheme('light')}>light</DropdownMenu.Item>
					<DropdownMenu.Item onSelect={() => setTheme('system')}>system</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	</header>
	{@render children()}
</div>
