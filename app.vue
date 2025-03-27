<template>
  <v-app>
    <LayoutRailDrawer />

    <v-main style="padding-bottom: 110px">

      <NuxtPage />
      <v-fab
        :icon="hidePodcastPlayer ? 'mdi-music' : 'mdi-close'"
        location="bottom right"
        :size="hidePodcastPlayer ? 'large' : 'small'"
        app
        color="primary"
        @click="hidePodcastPlayer = !hidePodcastPlayer"
      ></v-fab>

    </v-main>

    <PodcastPlayer v-show="!hidePodcastPlayer" class="position-fixed bottom-0 w-100" />

  </v-app>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const hidePodcastPlayer = ref(false);
</script>
