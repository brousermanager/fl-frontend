<template>
  <v-card elevation="8" hover class="reduced-width-card padded-card">
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <v-img :src="podcast.cover_url" class="large-image" />
      </v-col>
      <v-col cols="12" class="text-center">
        <v-card-title>
          {{ podcast.title }}
        </v-card-title>
        <v-card-subtitle>
          <h2>Durata: {{ podcast.duration % 60 }} min </h2>
          <!-- <h3>Episodio: {{ podcast.episode_number }} di {{ podcast.total_episodes }}</h3> -->
        </v-card-subtitle>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import type { Podcast } from "~/models/podcast";

defineProps<{ podcast: Podcast }>(); // using like this, we can use props without defining them in the script ex. title, cover_url, description, duration, episode_number, total_episodes
</script>

<style scoped>
.reduced-width-card {
  width: 40vw; /* Riduci la larghezza della card */
  margin: 0 auto;
}

.large-image {
  width: 100%;
  height: 500px;
}

.padded-card {
  padding-top: 20px;
}
</style>