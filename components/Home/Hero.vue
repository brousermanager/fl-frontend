<template>
  <v-parallax src="bg.png" height="40vh">
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h3>RADIO</h3>
      <h1 class="mb-4">FREQUENZA LIBERA</h1>
    </div>
  </v-parallax>
</template>

<script setup lang="ts">
import { usePodcastStore } from "~/stores/podcast";

const store = usePodcastStore();
</script>
