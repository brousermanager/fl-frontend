<template>
  <v-list>
    <v-list-item
      v-for="(podcast, index) in props.podcasts"
      :key="podcast.id"
      :class="{ selected: store.currentPodcast.id === podcast.id, 'ml-10 mr-10': true }"
      @click="updateCurrentPodcast(podcast.id)"
    >
      <v-list-item-title> {{ index + 1 }}. {{ podcast.title }} </v-list-item-title>
      <v-list-item-subtitle>
        {{ podcast.description }}
      </v-list-item-subtitle>
    </v-list-item>
  </v-list>
</template>

<script setup lang="ts">
import type { Podcast } from "~/models/podcast";
const store = usePodcastStore();

const props = defineProps<{ podcasts: Podcast[] }>();

const updateCurrentPodcast = (podcastId: string) => {
  const podcast = props.podcasts.find((p) => p.id === podcastId);
  if (podcast) {
    console.log("updateCurrentPodcast", podcast.id);
    store.updateCurrentPodcast(podcast);
  }
};
</script>

<style scoped>
.selected {
  transform: scale(1.01);
  transition: all 0.2s ease-in-out;
}
</style>
