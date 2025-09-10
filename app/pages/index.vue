<template>
  <v-container>
    <TauriControls />
    <HomeHero />

    <v-breadcrumbs :items="breadCrumbs">
      <template #divider>
        <v-icon icon="mdi-chevron-right"/>
      </template>
    </v-breadcrumbs>
    <v-row>
      <v-col cols="12">
        <Podcast />
      </v-col>
      <v-divider thickness="4"/>
      <v-col cols="12">
        <Collection :limit="6" />
        <v-col>
          <v-btn class="ma-5" color="orange-lighten-2" @click="navigateTo('/rubriche')">
            Vedi tutte le rubriche
          </v-btn>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const breadCrumbs = ref([{ title: "Home", disabled: false, to: "/" }]);
</script>
