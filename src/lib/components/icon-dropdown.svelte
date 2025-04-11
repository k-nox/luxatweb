<script lang="ts">
	import { fly } from 'svelte/transition';
	import { DropdownMenu } from 'bits-ui';
	import type { Snippet } from 'svelte';

	interface Props {
		icon: Snippet;
		items: Item[];
	}

	interface Item {
		onSelect: () => void;
		text: string;
	}

	let { icon, items }: Props = $props();
</script>

{#snippet item({ onSelect, text }: Item)}
	<DropdownMenu.Item
		class="data-highlighted:bg-hlmed rounded-sm p-1 text-sm font-medium select-none"
		{onSelect}>{text}</DropdownMenu.Item
	>
{/snippet}

<DropdownMenu.Root>
	<DropdownMenu.Trigger
		class="hover:bg-overlay inline-flex h-10 w-10 items-center justify-center rounded-md select-none active:scale-[0.98]"
	>
		{@render icon()}
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
							{#each items as { text, onSelect } (text)}
								{@render item({ text, onSelect })}
							{/each}
						</div>
					</div>
				{/if}
			{/snippet}
		</DropdownMenu.Content>
	</DropdownMenu.Portal>
</DropdownMenu.Root>
