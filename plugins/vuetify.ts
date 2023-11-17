import {createVuetify} from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// https://next.vuetifyjs.com/en/components/all/

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        components,
        directives,
        theme: {
            defaultTheme: "dark",
        },
    });
    nuxtApp.vueApp.use(vuetify);
});
