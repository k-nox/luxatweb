<script lang="ts">
	import { DropdownMenu } from 'bits-ui';
	import type { Theme, ThemeChoice } from './theme';
	import { Moon, Sun } from 'lucide-svelte';
	import { fly } from 'svelte/transition';

	interface Props {
		theme: Theme;
		setTheme: (choice: ThemeChoice) => void;
	}

	let { theme, setTheme }: Props = $props();
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#if theme === 'light'}
			<Sun />
		{:else}
			<Moon />
		{/if}
	</DropdownMenu.Trigger>
	<DropdownMenu.Portal>
		<DropdownMenu.Content forceMount>
			{#snippet child({ wrapperProps, props, open })}
				{#if open}
					<div {...wrapperProps}>
						<div {...props} transition:fly>
							<DropdownMenu.Item onSelect={() => setTheme('dark')}>dark</DropdownMenu.Item>
							<DropdownMenu.Item onSelect={() => setTheme('light')}>light</DropdownMenu.Item>
							<DropdownMenu.Item onSelect={() => setTheme('system')}>system</DropdownMenu.Item>
						</div>
					</div>
				{/if}
			{/snippet}
		</DropdownMenu.Content>
	</DropdownMenu.Portal>
</DropdownMenu.Root>
