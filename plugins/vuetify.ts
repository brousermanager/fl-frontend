import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// https://next.vuetifyjs.com/en/components/all/

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "dark",
      themes: {
        dark: {
          colors: {
            // TODO: Change those colors to change them across all the software
            primary: "#FFAB40",
            secondary: "#BDBDBD",
            text: "#BDBDBD",
            //                        background: "#BDBDBD",
            //                        cardBackground: "#BDBDBD"
          },
        },
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
});
