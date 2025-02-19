<template>
  <v-parallax src="bg.png" height="50vh">
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 class="text-h2 font-weight-thin mb-4">Radio Frequenza Libera</h1>
      <h2 class="subheading">
        Stai ascoltando:
        {{ store.currentPodcast.title }}
      </h2>
    </div>
  </v-parallax>
</template>

<script setup lang="ts">
import { usePodcastStore } from "~/stores/podcast";

const store = usePodcastStore();
</script>
