import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true
	}),
	kit: {
		alias: {
			$lib: 'src/lib',
			$models: 'src/models'
		},
		adapter: adapter()
	}
};

export default config;
