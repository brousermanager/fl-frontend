<template>
  <v-list variant="plain" rounded select-strategy="leaf" elevation="4">
    <v-list-item
      v-for="(podcast, index) in props.podcasts"
      :key="podcast.id"
      :active="store.currentPodcast.id === podcast.id"
      :active-color="store.currentPodcast.id === podcast.id ? 'secondary' : ''"
      active-class="selected-item"
      class="py-3"
      @click="updateCurrentPodcast(podcast.id)"
    >
      <template v-slot:prepend>
        <v-avatar color="pink" size="36">
          <span class="text-caption">{{ index + 1 }}</span>
        </v-avatar>
      </template>

      <v-list-item-title>{{ podcast.title }}</v-list-item-title>

      <v-list-item-subtitle class="text-high-emphasis">
        {{ podcast.description }}
      </v-list-item-subtitle>
    </v-list-item>
    <v-spacer></v-spacer>
  </v-list>
</template>

<script setup lang="ts">
import type { Podcast } from "~/models/podcast";
import { usePodcastStore } from "~/stores/podcast";

const store = usePodcastStore();
const props = defineProps<{ podcasts: Podcast[] }>();

const updateCurrentPodcast = (podcastId: string) => {
  const podcast = props.podcasts.find((p) => p.id === podcastId);
  if (podcast) {
    store.updateCurrentPodcast(podcast);
  }
};
</script>
