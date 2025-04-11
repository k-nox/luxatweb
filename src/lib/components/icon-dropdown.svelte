<script lang="ts">
	import { fly } from 'svelte/transition';
	import { DropdownMenu } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import type { DropdownItem } from '$lib/types';

	interface Props {
		icon: Snippet;
		items: DropdownItem[];
	}

	let { icon, items }: Props = $props();
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger
		class="hover:bg-overlay inline-flex h-11 w-11 items-center justify-center rounded-md select-none active:scale-[0.98]"
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
							{#each items as item (item)}
								<DropdownMenu.Item
									class="data-highlighted:bg-hlmed relative cursor-pointer rounded-sm p-1.5 font-medium select-none"
									onSelect={item.type === 'button' ? item.onSelect : undefined}
								>
									{#if item.type === 'anchor'}
										<a href={item.href}>
											<span class="absolute inset-0"></span>
											{item.text}
										</a>
									{:else}
										{item.text}
									{/if}
								</DropdownMenu.Item>
							{/each}
						</div>
					</div>
				{/if}
			{/snippet}
		</DropdownMenu.Content>
	</DropdownMenu.Portal>
</DropdownMenu.Root>
