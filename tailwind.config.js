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
			},
			width: {
				sm: 'var(--w-sm)',
				lg: 'var(--w-lg)',
				x2l: 'var(--w-2xl)',
			},
		},
	},
	plugins: [],
};
