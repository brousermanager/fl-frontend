// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: "nuxt3 - vuetify - tauri",
      meta: [
        {
          name: "description",
          content: "nuxt3 - vuetify - tauri",
        },
      ],
    },
  },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.css",
    "video.js/dist/video-js.css",
  ],
  build: {
    transpile: ["vuetify", "videojs-player", "vue-audio-visual"],
  },
  runtimeConfig: {
    public: {
      REST_API_URL: process.env.REST_API_URL || "http://localhost:4000",
    },
  },
  modules: ["@pinia/nuxt", "pinia-logger-nuxt"],
  pinia: {
    autoImports: ["defineStore", "definePiniaStore", "storeToRefs"],
  },
  imports: {
    autoImport: true,
    dirs: ["*"],
  },
});
