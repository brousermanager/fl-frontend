<template>
  <v-row>
    <v-col cols="12">
      <v-card elevation="8">
        <v-card-title>EPISODI</v-card-title>
      </v-card>
    </v-col>
    <v-col cols="12" md="6">
      <RubricaCard
        v-if="podcast"
        :podcast="podcast"
      />
    </v-col>
    <v-col cols="12" md="6">
      <RubricaList
        @select-rubrica="selectRubrica"
        :podcasts="samplePodcasts"
      />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Podcast } from "~/models/podcast";

const podcast = ref<Podcast | null>(null);

const selectRubrica = (p: Podcast) => {
  podcast.value = p;
};

const samplePodcasts: Podcast[] = [
  {
    id: "1",
    title: "La Scienza del Sonno",
    description: "Un viaggio nel mondo del sonno e del sogno con esperti del settore.",
    audio_url: "https://example.com/audio/scienza-sonno.mp3",
    cover_url: "https://example.com/images/scienza-sonno.jpg",
    insert_time: "2025-03-10T08:00:00Z",
    update_time: "2025-03-10T08:00:00Z",
    collection: "Benessere e Salute",
    podcasters: ["Dott.ssa Serena Rossi"]
  },
  {
    id: "2",
    title: "Storie dal Futuro",
    description: "Racconti immaginari ambientati in futuri possibili, tra tecnologia e umanità.",
    audio_url: "https://example.com/audio/storie-futuro.mp3",
    cover_url: "https://example.com/images/storie-futuro.jpg",
    insert_time: "2025-03-05T14:30:00Z",
    update_time: "2025-03-06T09:15:00Z",
    collection: "Narrativa Sci-Fi",
    podcasters: ["Luca Bianchi", "Valentina Moretti"]
  },
  {
    id: "3",
    title: "Caffè con la Storia",
    description: "Conversazioni informali sui grandi eventi e personaggi storici.",
    audio_url: "https://example.com/audio/caffe-storia.mp3",
    cover_url: "https://example.com/images/caffe-storia.jpg",
    insert_time: "2025-03-01T10:00:00Z",
    update_time: "2025-03-02T12:00:00Z",
    collection: "Cultura Generale",
    podcasters: ["Marco Ferri"]
  }
];
</script>
