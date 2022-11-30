<script lang="ts">
	import type { PageData } from './$types';
	import ProductCard from './lib/ProductCard.svelte';
	export let data: PageData;
</script>

<h1>Welcome to Neznayer art shop</h1>
<section class="grid p-5 justify-center">
	{#each data.products as product}
		<ProductCard {product} />
	{/each}
</section>
