<template>
  <v-row>
    <v-col cols="12">
      <v-card elevation="8">
        <v-card-title>EPISODI</v-card-title>
      </v-card>
    </v-col>
    <v-col cols="12" md="6">
      <RubricaCard v-if="store.currentPodcast" :podcast="store.currentPodcast" />
    </v-col>
    <v-col cols="12" md="6">
      <RubricaList :podcasts="podcasts" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { usePodcastStore } from "~/stores/podcast";
import type { Podcast } from "~/models/podcast";

const store = usePodcastStore();
const podcasts = ref<Podcast[]>([]);
const route = useRoute();

try {
  console.log("Fetching podcasts...");
  podcasts.value = await store.getPodcastsByCollection(
    route.params.collectionId as string
  );
} catch (error) {
  console.error("Error fetching podcasts:", error);
}
</script>
