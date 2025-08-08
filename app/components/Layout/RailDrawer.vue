<template>
  <v-app-bar scroll-behavior="hide" >
    <v-app-bar-nav-icon
      v-if="!$vuetify.display.mobile"
      variant="text"
      @click.stop="drawer = !drawer"
    />

    <v-toolbar-title><strong>
      Radio Frequenza Libera
    </strong></v-toolbar-title>

    <v-img :src="logo" max-width="50" class="mr-5" />
  </v-app-bar>

  <v-navigation-drawer
    v-if="!$vuetify.display.mobile"
    v-model="drawer"
    temporary
  >
    <v-list density="compact" nav>
      <v-list-item
        v-for="option in menuOptions"
        :prepend-icon="option.icon"
        :title="option.title"
        :value="option.path"
        @click="navigateTo(option.path)"
      />
    </v-list>
  </v-navigation-drawer>

  <v-bottom-navigation v-else>
    <v-btn
      v-for="option in menuOptions"
      :value="option.path"
      @click="navigateTo(option.path)"
    >
      <v-icon>{{ option.icon }}</v-icon>
      <span>{{ option.title }}</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts" setup>
import logo from '@/assets/logo.png';

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
