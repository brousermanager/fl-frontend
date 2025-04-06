<template>
  <VuetifyAudioPlayer
    :file="file"
    :title="store.currentPodcast.title"
    :subtitle="store.currentPodcast.collection"
    color="secondary"
    ref="vuetifyAudio"
    elevation="24"
  />
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { usePodcastStore } from "~/stores/podcast";
import type { Podcast } from "~/models/podcast";

const file = ref("");
const store = usePodcastStore();
const vuetifyAudio = ref(null);

watch(
  () => store.currentPodcast,
  async (podcast: Podcast | null) => {
    if (podcast) {
      // Pause the audio when changing the podcast
      if (vuetifyAudio.value) {
        await vuetifyAudio.value.stop();
      }
      file.value = podcast.audio_url;
      // Play the audio when the podcast changes
      if (vuetifyAudio.value && podcast.audio_url) {
        await vuetifyAudio.value.pause();
        await vuetifyAudio.value.play();
      }
    }
  }
);
</script>
