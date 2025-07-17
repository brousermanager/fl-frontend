<template>
  <v-app-bar scroll-behavior="hide" >
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
    />

    <v-toolbar-title><strong>Radio Frequenza Libera</strong></v-toolbar-title>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    :location="$vuetify.display.mobile ? 'bottom' : undefined"
    temporary
  >
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
        prepend-icon="mdi-account-group"
        title="Staff"
        value="staff"
        @click="navigateTo('/staff')"
      />
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
