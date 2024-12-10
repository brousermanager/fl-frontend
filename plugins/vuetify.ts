import { createVuetify } from 'vuetify';
import { defineNuxtPlugin } from '#app';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'dark',
      themes: {
        light: {
          colors: {
            primary: '#B7003F',
            secondary: '#2E2250',
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});