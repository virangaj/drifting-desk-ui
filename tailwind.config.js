/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				navbarBack: 'var(--main-navbar-back)',
				primary: 'var(--primary)',
			},
		},
	},
	plugins: [],
};
