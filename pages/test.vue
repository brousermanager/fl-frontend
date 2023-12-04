<template>
  <HomeMainSlider />
  <v-main>
    <SessoDialog btnTxt="Merda di edo" textSource="Merda di edo" />
    <PodcastPlayer />
    <PodcastPlayerTest />
  </v-main>
</template>

<script lang="ts" setup>
const itemStore = useItemStore();
</script>
