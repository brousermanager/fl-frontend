<template>
  <HomeMainSlider />
  <v-main>
    <SessoDialog btnTxt="Merda di edo" textSource="Merda di edo" />
    <PodcastPlayer />
  </v-main>
</template>

<script lang="ts" setup>
const itemStore = useItemStore();
</script>
