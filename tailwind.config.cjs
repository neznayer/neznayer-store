const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		colors: {
			'accent-red': '#E85252',
			'dark-gray': '#9A9A9A',
			'light-gray': '#D9D9D9',
			border: '#E8D4D2'
		}
	},

	plugins: [forms, typography]
};

module.exports = config;
