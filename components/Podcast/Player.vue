<template>
  <VuetifyAudioPlayer
    :file="file"
    :title="store.currentPodcast.title"
    :subtitle="getCollectionNameById(store.currentPodcast.collection)"
    :image="store.currentPodcast.cover_url"
    color="secondary"
    ref="vuetifyAudio"
    elevation="24"
  />
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { usePodcastStore } from "~/stores/podcast";
import type { Podcast } from "~/models/podcast";
import type { PodcastCollection } from "~/models/podcastCollection";


const file = ref("");
const store = usePodcastStore();
const vuetifyAudio = ref(null);

const getCollectionNameById = (id: string) => {
  const collection = store.podcastCollections.find((collection: PodcastCollection) => collection.id === id);
  return collection ? collection.title : "";
};

watch(
  () => store.currentPodcast,
  async (podcast: Podcast | null) => {
    if (podcast) {
      // Pause the audio when changing the podcast
      if (vuetifyAudio.value) {
        await vuetifyAudio.value.stop();
      }
      file.value = podcast.audio_url;
      // Pause the audio when the podcast changes
      if (vuetifyAudio.value && podcast.audio_url) {
        await vuetifyAudio.value.pause();
        await vuetifyAudio.value.play();
      }
    }
  }
);
</script>
