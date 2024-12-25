export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ['@nuxt/ui', '@nuxt/eslint'],
	css: ['~/assets/css/main.css', '~/assets/css/intersect.css'],
	ui: {
		prefix: 'Nuxt'
	}
})
