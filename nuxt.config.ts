// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: "Radio Frequenza Libera",
      meta: [
        {
          name: "description",
          content: "Radio Frequenza Libera",
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

  modules: [
    "@pinia/nuxt",
    "pinia-logger-nuxt",
    "@nuxt/devtools",
    "@dargmuesli/nuxt-cookie-control",
  ],

  pinia: {
    autoImports: ["defineStore", "definePiniaStore", "storeToRefs"],
  },

  imports: {
    autoImport: true,
    dirs: ["*"],
  },
  devtools: {
    timeline: {
      enabled: true,
    },
  },
});
