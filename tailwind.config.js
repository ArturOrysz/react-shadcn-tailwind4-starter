/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#f5f5f5',
					100: '#e0e0e0',
					200: '#bdbdbd',
					300: '#9e9e9e',
					400: '#757575',
					500: '#616161',
					600: '#424242',
					700: '#212121',
					800: '#1b1b1b',
					900: '#0d0d0d',
				},
				secondary: {
					50: '#ffffff',
					100: '#fafafa',
					200: '#f0f0f0',
					300: '#e5e5e5',
					400: '#d6d6d6',
					500: '#c8c8c8',
					600: '#a8a8a8',
					700: '#888888',
					800: '#666666',
					900: '#444444',
				},
				accent: {
					50: '#ffe5e7',
					100: '#ffc9ce',
					200: '#ff8b94',
					300: '#ff5a6b',
					400: '#ff2a41',
					500: '#e00027',
					600: '#b00020',
					700: '#800019',
					800: '#500011',
					900: '#280009',
				},
				fontFamily: {
					sans: ['Poppins', 'sans-serif'],
					rubik: ['Rubik', 'sans-serif'],
				},
			},
		},
	},
	plugins: [],
};
// This Tailwind CSS configuration file defines a custom theme with extended color palettes for primary, secondary, and accent colors. Each color palette includes shades from 50 to 900, allowing for a wide range of color options in the design. The configuration is set to scan all JavaScript and TypeScript files in the 'src' directory for class names to generate the necessary styles.
