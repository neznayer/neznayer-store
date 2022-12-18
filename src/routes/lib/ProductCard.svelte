<script lang="ts">
	import type { ProductI } from '$models/product.model';
	import Card from './Card.svelte';

	export let product: ProductI;

	const defaultImages = product.images.filter((img) => img.is_default);

	const prices = product.variants.map((v) => v.cost);
	const maxPrice = Math.max(...prices) / 100;
	const minPrice = Math.min(...prices) / 100;
</script>

<Card>
	<div class="h-[200px] flex flex-row relative">
		<div class="overflow-scroll h-[100%] flex flex-row">
			{#each defaultImages as image}
				<img src={image.src} alt="" srcset="" class="block" />
			{/each}
		</div>
		<h2 class="absolute bottom-1 left-1">{product.title}</h2>
	</div>

	<div class="flex-1 relative">
		<p class="absolute top-3 left-3">
			<span class="text-l inline">From </span>
			<span class="text-xl inline">$</span>
			<span class="text-2xl inline">{minPrice}</span>
		</p>
		<p class="absolute bottom-3 left-3">
			<span class="block text-sm text-slate-400">Worldwide shipping</span>
		</p>
	</div>
</Card>
