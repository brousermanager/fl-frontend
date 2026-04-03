<template>
  <v-app-bar scroll-behavior="hide">
    <v-app-bar-nav-icon
      v-if="!$vuetify.display.mobile"
      variant="text"
      @click.stop="drawer = !drawer"
    />

    <v-toolbar-title><strong>Radio Frequenza Libera</strong></v-toolbar-title>

    <v-spacer />

    <v-btn variant="text" icon="mdi-instagram" aria-label="Instagram" href="https://www.instagram.com/frequenzalibera/"/>
    <v-btn variant="text" icon="mdi-twitch" aria-label="Twitch" href="https://www.twitch.tv/radiofrequenzalibera"/>
    <v-btn variant="text" icon="mdi-youtube" aria-label="YouTube" href="https://www.youtube.com/@frequenzalibera"/>
  </v-app-bar>

  <v-navigation-drawer v-if="!$vuetify.display.mobile" v-model="drawer" temporary>
    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-home-city"
        title="Home"
        value="home"
        @click="navigateTo('/')"
      />
      <v-list-item
        prepend-icon="mdi-podcast"
        title="Rubriche"
        value="rubriche"
        @click="navigateTo('/rubriche')"
      />
      <v-list-item
        prepend-icon="mdi-text-box-outline"
        title="Statuto"
        value="statuto"
        @click="navigateTo('/statuto')"
      />
    </v-list>
  </v-navigation-drawer>

  <v-bottom-navigation v-else grow app :order="-1">
    <v-btn
      v-for="option in menuOptions"
      :key="option.title"
      :value="option.path"
      @click="navigateTo(option.path)"
    >
      <v-icon>{{ option.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts" setup>
// import logo from "@/assets/logo.png";

const drawer = ref(false);
const group = ref("");

watch(group, () => {
  drawer.value = false;
});

const menuOptions = [
  { title: "Home", icon: "mdi-home-city", path: "/" },
  { title: "Rubriche", icon: "mdi-podcast", path: "/rubriche" },
  { title: "Staff", icon: "mdi-account-group", path: "/staff" },
];
</script>
