<template>
  <v-row>
    <v-col cols="4">
      <SingleCard :podcast="currentPodcast" />
    </v-col>
    <v-col cols="8">
      <PodcastList :items="items" @select="updateCurrentPodcast" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { usePodcastStore } from "~/stores/podcast";
import type { Podcast } from "~/models/podcast";

const store = usePodcastStore();
const items = ref<Podcast[]>([]);
const currentPodcast = computed(() => store.currentPodcast);

const loadPodcasts = async () => {
  try {
    await store.getPodcasts();
    items.value = store.podcasts;
  } catch (error) {
    console.error("Error loading podcasts", error);
  }
};

const updateCurrentPodcast = (podcastId: string) => {
  const podcast = store.podcasts.find((p) => p.id === podcastId);
  if (podcast) {
    store.updateCurrentPodcast(podcast);
  }
};

// Load initial podcasts
loadPodcasts();
</script>