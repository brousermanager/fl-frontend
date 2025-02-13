<template>
  <VuetifyAudioPlayer :file="file" color="secondary" ref="vuetifyAudio" class="rounded-xl" elevation="24" />
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
  (podcast: Podcast | null) => {
    if (podcast) {
      // Pause the audio when changing the podcast
      if (vuetifyAudio.value) {
        vuetifyAudio.value.stop();
      }
      file.value = podcast.audio_url;
    }
  }
);
</script>
