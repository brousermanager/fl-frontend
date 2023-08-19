<template>
  <v-navigation-drawer expand-on-hover rail permanent>
    <v-list>
      <v-list-item
        prepend-avatar="https://static.miraheze.org/nonciclopediawiki/f/fb/Porco_Dio.JPG"
        title="Porcodio"
        subtitle="Cazzi"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-music"
        title="Porcodio"
        value="Porcodio"
        @click="home"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
const home = () => {
  window.location.href =
    "https://nonciclopedia.org/wiki/Divinit%C3%A0_mosconiane#Porco_Dio";
};
</script>
