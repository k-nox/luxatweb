<script lang="ts">
	interface Props {
		url: string;
		text: string;
	}

	let { url, text: title }: Props = $props();
</script>

<span
	class="text-pine before:bg-foam hover:text-foam after:bg-foam relative transition-all duration-700 ease-in-out before:absolute before:bottom-0 before:left-1/2 before:h-px before:w-0 before:origin-center before:transition-[width] before:duration-700 before:ease-in-out after:absolute after:right-1/2 after:bottom-0 after:h-px after:w-0 after:origin-center after:transition-[width] after:duration-700 after:ease-in-out hover:before:w-1/2 hover:after:w-1/2"
>
	<a href={url}>{title}</a>
</span>
