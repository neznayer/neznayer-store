<script lang="ts">
	import type { ProductI } from '$models/product.model';

	export let product: ProductI;

	const defaultImages = product.images.filter((img) => img.is_default);

	function getMinMaxPrice() {
		const prices = product.variants.map((v) => v.cost);
		const minPrice = Math.min(...prices) / 100;
		const maxPrice = Math.max(...prices) / 100;
		return {
			minPrice,
			maxPrice
		};
	}
</script>

<div class="flex flex-col w-[300px] h-[300px] bg-gray-100 border-slate-200 border-[1px] shadow-xl">
	<div class="h-[200px] flex flex-row overflow-hidden">
		{#each defaultImages as image}
			<img src={image.src} alt="" srcset="" />
		{/each}
	</div>
	<h2>{product.title}</h2>
	<span>{getMinMaxPrice().minPrice} ~ {getMinMaxPrice().maxPrice}</span>
</div>
