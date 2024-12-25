const intersect = require('tailwindcss-intersect')
const motion = require('tailwindcss-motion')
const typography = require('@tailwindcss/typography')

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	safelist: ['dark'],
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue',
		'./assets/**/*.css'
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['tt-commons-pro', 'sans-serif'],
				alt: ['tt-commons-pro', 'system-ui']
			},
			colors: {
				red: {
					DEFAULT: '#FF0000',
					50: '#FFB8B8',
					100: '#FFA3A3',
					200: '#FF7A7A',
					300: '#FF5252',
					400: '#FF2929',
					500: '#FF0000',
					600: '#C70000',
					700: '#8F0000',
					800: '#570000',
					900: '#1F0000',
					950: '#030000'
				}
			}
		}
	},
	plugins: [typography, intersect, motion]
}
