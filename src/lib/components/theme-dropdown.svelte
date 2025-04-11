<script lang="ts">
	import type { DropdownItem, Theme, ThemeChoice } from '$lib/types';
	import { Moon, Sun } from 'lucide-svelte';
	import IconDropdown from './icon-dropdown.svelte';

	interface Props {
		theme: Theme;
		setTheme: (choice: ThemeChoice) => void;
	}

	let { theme, setTheme }: Props = $props();

	let items: DropdownItem[] = [
		{
			onSelect: () => setTheme('dark'),
			text: 'dark',
			type: 'button'
		},
		{
			onSelect: () => setTheme('light'),
			text: 'light',
			type: 'button'
		},
		{
			onSelect: () => setTheme('system'),
			text: 'system',
			type: 'button'
		}
	];
</script>

<IconDropdown {items}>
	{#snippet icon()}
		{#if theme === 'light'}
			<Sun class="text-gold h-6 w-6" />
		{:else}
			<Moon class="text-iris h-6 w-6" />
		{/if}
	{/snippet}
</IconDropdown>
