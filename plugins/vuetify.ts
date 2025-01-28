import { createVuetify } from 'vuetify';
import { defineNuxtPlugin } from '#app';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import colors from 'vuetify/util/colors'

const flTheme = {
  dark: true,
  colors: {
    primary: colors.deepPurple.darken3, // Primary color
    background: colors.grey.darken3, // Background color
    surface: colors.grey.darken4, // Surface color
    'surface-bright': colors.grey.darken2, // Bright surface color
    'surface-light': colors.grey.darken1, // Light surface color
    'surface-variant': colors.grey.darken2, // Variant surface color
    'on-surface-variant': colors.shades.white, // Text / Icons on surface variant
    'primary-darken-1': colors.deepPurple.darken4, // Darker shade of primary color
    secondary: colors.deepPurple.lighten1, // Secondary color
    'secondary-darken-1': colors.deepPurple.darken1, // Darker shade of secondary color
    error: colors.red.darken3, // Error color
    info: colors.blue.darken3, // Info color
    success: colors.green.darken3, // Success color
    warning: colors.amber.darken3, // Warning color
    'primary-text': colors.grey.lighten5, // Primary text
    'secondary-text': colors.grey.lighten3, // Secondary text
    divider: colors.grey.darken1, // Divider color
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'flTheme',
      themes: {
        flTheme,
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
});