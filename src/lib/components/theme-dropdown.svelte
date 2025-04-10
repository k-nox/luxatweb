<script lang="ts">
	import { DropdownMenu } from 'bits-ui';
	import type { Theme, ThemeChoice } from '$lib/types';
	import { Moon, Sun } from 'lucide-svelte';
	import { fly } from 'svelte/transition';

	interface Props {
		theme: Theme;
		setTheme: (choice: ThemeChoice) => void;
	}

	let { theme, setTheme }: Props = $props();
</script>

{#snippet item(option: ThemeChoice)}
	<DropdownMenu.Item
		class="data-highlighted:bg-hlmed rounded-sm p-1 text-sm font-medium select-none"
		onSelect={() => setTheme(option)}>{option}</DropdownMenu.Item
	>
{/snippet}

<DropdownMenu.Root>
	<DropdownMenu.Trigger
		class="hover:bg-overlay inline-flex h-10 w-10 items-center justify-center rounded-md select-none active:scale-[0.98]"
	>
		{#if theme === 'light'}
			<Sun class="text-gold h-6 w-6" />
		{:else}
			<Moon class="text-iris h-6 w-6" />
		{/if}
	</DropdownMenu.Trigger>
	<DropdownMenu.Portal>
		<DropdownMenu.Content
			class="bg-overlay border-muted rounded-md border p-1 shadow-sm"
			sideOffset={8}
			forceMount
		>
			{#snippet child({ wrapperProps, props, open })}
				{#if open}
					<div {...wrapperProps}>
						<div {...props} transition:fly>
							{@render item('dark')}
							{@render item('light')}
							{@render item('system')}
						</div>
					</div>
				{/if}
			{/snippet}
		</DropdownMenu.Content>
	</DropdownMenu.Portal>
</DropdownMenu.Root>
