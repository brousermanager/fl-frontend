<template>
  <HomeHero />

  <v-container>
    <v-breadcrumbs :items="breadCrumbs">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>
    <v-row>
      <v-col cols="12">
        <Podcast />
      </v-col>
      <v-divider thickness="4"></v-divider>
      <v-col cols="12">
        <Collection />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const breadCrumbs = ref([
  { title: "Home", disabled: false, href: "/" }
]);
</script>