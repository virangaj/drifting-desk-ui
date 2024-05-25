/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				navbarBack: 'var(--main-navbar-back)',
				primary: 'var(--primary)',
				footerBack: 'var(--footer-back)',
				footerGrayBack: 'var(--footer-gray-back)',
				grayText: 'var(--gray-text)',
				footerGrayText: 'var(--footer-gray-text)',
				serviceCardGrayBack: 'var(--service-card-gray-back)',
				serviceCardActiveBg: 'var(--service-card-active-bg)',
				a7a7a7: 'var(--A7A7A7)',
				c1c1c1c: 'var(--C1C1C1C)',
				line: 'var(--line)',
			},
			width: {
				sm: 'var(--w-sm)',
				lg: 'var(--w-lg)',
				x2l: 'var(--w-2xl)',
			},
			scale: {
				40: '0.40',
			},
		},
	},
	plugins: [],
};
