<template>
  <v-app>
    <LayoutRailDrawer />

    <v-main>

      <NuxtPage />

      <PodcastPlayer />
    </v-main>
  </v-app>
</template>
<script setup lang="ts">
const store = usePodcastStore();

onBeforeMount(async () => {
  await store.getPodcastCollections();
});
</script>
