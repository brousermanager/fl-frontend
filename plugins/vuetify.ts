import { createVuetify } from 'vuetify';
import { defineNuxtPlugin } from '#app';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import colors from 'vuetify/util/colors'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'dark',
      themes: {
        dark: {
          colors: {
            primary: colors.purple.base,
            secondary: colors.purple.darken4,
            accent: colors.purple.accent3,
            lighten1: colors.purple.lighten1,
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});