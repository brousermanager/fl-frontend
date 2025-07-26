// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	nitro: {
		prerender: {
			routes: ['/']
		}
	},
	app: {
		head: {
			title: "Radio Frequenza Libera",
			meta: [
				{
					name: "description",
					content: "Radio Frequenza Libera"
				}
			]
		}
	},
	css: ["vuetify/lib/styles/main.sass", "@mdi/font/css/materialdesignicons.css"],
	build: {
		transpile: ["vuetify", "videojs-player", "vue-audio-visual"]
	},
	runtimeConfig: {
		public: {
			REST_API_URL: process.env.REST_API_URL || "http://localhost:8000"
		}
	},
	modules: ["@pinia/nuxt", "pinia-logger-nuxt", "@nuxt/devtools", "@dargmuesli/nuxt-cookie-control", "@nuxt/eslint"],
	imports: {
		autoImport: true,
		dirs: ["*"]
	},
	devtools: {
		timeline: {
			enabled: true
		},
		enabled: process.env.NODE_ENV === 'development' && !process.env.TAURI_PLATFORM
	},
	compatibilityDate: "2025-07-17"
});
