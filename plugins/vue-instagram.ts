import VueInstagram from 'vue-instagram';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueInstagram);
});
