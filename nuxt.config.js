export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxtjs/seo', '@nuxt/image'],
	css: ['~/assets/css/main.css'],
	ui: {
		prefix: 'Nuxt'
	}
})
