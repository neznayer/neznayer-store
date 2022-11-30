import { PRINTYFY_TOKEN, PRINTIFY_API_BASE_URL } from '$env/static/private';
import type { LoadEvent } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { ProductsResponse } from '$models/product.model';
import type { ShopI } from '$models/shop.model';

export async function load({ fetch }: LoadEvent) {
	const shop = (await (
		await fetch(`${PRINTIFY_API_BASE_URL}/v1/shops.json`, {
			headers: { Authorization: `Bearer ${PRINTYFY_TOKEN}` }
		})
	).json()) as ShopI[];

	const { id } = shop[0];

	const products = (await (
		await fetch(`${PRINTIFY_API_BASE_URL}/v1/shops/${id}/products.json`, {
			headers: { Authorization: `Bearer ${PRINTYFY_TOKEN}` }
		})
	).json()) as ProductsResponse;

	return {
		products: products.data
	};
}
