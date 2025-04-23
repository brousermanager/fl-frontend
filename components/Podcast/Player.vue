<template>
  <Soundiocan
    :slider="true"
    :file="file"
    :title="store.currentPodcast.title"
    :subtitle="getCollectionNameById(store.currentPodcast.collection)"
    :image="store.currentPodcast.cover_url"
    color="secondary"
    ref="player"
    elevation="24"
  />
</template>

<script setup lang="ts">
import Soundiocan from "soundiocan";
import { ref, watch } from "vue";
import { usePodcastStore } from "~/stores/podcast";
import type { Podcast } from "~/models/podcast";
import type { PodcastCollection } from "~/models/podcastCollection";

const player = ref(Soundiocan); // Reference to the Soundiocan component

const file = ref("");
const store = usePodcastStore();

const getCollectionNameById = (id: string) => {
  const collection = store.podcastCollections.find(
    (collection: PodcastCollection) => collection.id === id
  );
  return collection ? collection.title : "";
};

watch(
  () => store.currentPodcast,
  async (podcast: Podcast | null) => {
    if (podcast) {
      // Pause the audio when changing the podcast
      if (player.value) {
        await player.value.stop();
      }
      file.value = podcast.audio_url;
      // Pause the audio when the podcast changes
      if (player.value && podcast.audio_url) {
        await player.value.pause();
        await player.value.play();
      }
    }
  }
);
</script>
