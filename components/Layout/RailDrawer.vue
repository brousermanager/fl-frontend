<template>
  <v-app-bar scroll-behavior="hide" color="primary">
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>Radio Frequenza Libera</v-toolbar-title>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    :location="$vuetify.display.mobile ? 'bottom' : undefined"
    temporary
  >
    <v-list density="compact" nav>
      <v-list-item
        @click="navigateTo('/')"
        prepend-icon="mdi-home-city"
        title="Home"
        value="home"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-podcast"
        title="Rubriche"
        value="rubriche"
        @click="navigateTo('/rubriche')"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
const drawer = ref(false);
const group = ref("");

watch(group, () => {
  drawer.value = false;
});
</script>
