<script>
	import SearchBarType from './SearchBarType.svelte';
	import SearchButtonInline from './SearchButtonInline.svelte';
</script>

<section class="flex justify-center">
	<div
		class="relative rounded-[8px] flex flex-row gap-1 w-[80vw] border border-light-gray items-center px-2"
	>
		<SearchBarType />
		<input type="text" class="flex-1 outline-none block border-none focus:outline-none" />
		<SearchButtonInline />
	</div>
</section>
