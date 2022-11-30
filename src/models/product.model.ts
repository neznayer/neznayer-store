export interface ProductI {
	id: string;
	title: string;
	description: string;
	tags: string[];
	options: OptionI[];
	variants: VariantI[];
	images: ImageI[];
	created_at: string;
	updated_at: string;
	visible: boolean;
	is_locked: boolean;
	blueprint_id: number;
	user_id: number;
	shop_id: number;
	print_provider_id: number;
	print_areas: PrintAreaI[];
	print_details: [];
	sales_channel_properties: [];
	twodaydelivery_enabled: boolean;
}

export interface ProductsResponse {
	current_page: number;
	data: ProductI[];
	first_page_url: string;
	from: number;
	last_page: number;
	last_page_url: number;
	next_page_url: string | null;
	path: string;
	per_page: number;
	prev_page_url: string | null;
	to: number;
	total: number;
}

type OptionTypeT = 'size' | 'surface' | 'shape';

type OptionTypeValueT = {
	id: string;
	title: string;
};

interface VariantI {
	id: number;
	sku: string;
	cost: number;
	price: number;
	title: string;
	grams: number;
	is_enabled: boolean;
	is_default: boolean;
	is_available: boolean;
	options: number[];
	quantity: number;
}
interface OptionI {
	name: string;
	type: OptionTypeT;
	values: OptionTypeValueT[];
}

interface ImageI {
	src: string;
	variant_ids: number[];
	position: string;
	is_default: boolean;
	is_selected_for_publishing: boolean;
}

type PlaceholderT = {
	position: 'all' | 'front_1' | 'front_2' | 'front_3' | 'front_4';
	images: PlaceholderImageT[];
};

type PlaceholderImageT = {
	id: string;
	name: string;
	type: string;
	height: number;
	width: number;
	x: number;
	y: number;
	scale: number;
	angle: number;
};

interface PrintAreaI {
	variant_ids: number[];
	placeholders: PlaceholderT[];
}
