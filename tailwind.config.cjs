/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			maxWidth: {
				'content': '90rem',
			},
		},
	},
	plugins: [require('@tailwindcss/forms'), ...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()],
}
