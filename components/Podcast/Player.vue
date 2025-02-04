<template>
  <v-card>
    <v-card-title v-if="store.currentPodcast">
      {{ store.currentPodcast.title }}
    </v-card-title>
    <v-card-subtitle> {{ store.currentPodcast.description }}</v-card-subtitle>
    <VuetifyAudio :file="file" color="secondary" ref="vuetifyAudio">
    </VuetifyAudio>
  </v-card>
</template>

<script setup lang="ts">
  import { ref, watch } from "vue";
  import VuetifyAudio from "vuetify3-audio-player";
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
