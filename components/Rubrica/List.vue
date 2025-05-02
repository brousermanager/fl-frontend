<template>
  <v-list rounded="lg">
    <v-list-item
      v-for="(podcast, index) in props.podcasts"
      :key="podcast.id"
      :active="store.currentPodcast.id === podcast.id"
      :active-color="store.currentPodcast.id === podcast.id ? 'secondary' : ''"
      :active-class="'selected-item'"
      @click="updateCurrentPodcast(podcast.id)"
      rounded="lg"
      class="mb-2"
    >
      <template v-slot:prepend>
        <v-avatar color="primary" size="36" class="me-3">
          <span class="text-caption">{{ index + 1 }}</span>
        </v-avatar>
      </template>

      <v-list-item-title class="font-weight-medium">
        <div class="text-truncate" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          {{ podcast.title }}
        </div>
      </v-list-item-title>
      
      <v-list-item-subtitle class="text-truncate mt-1" max-width="100%">
        {{ podcast.description }}
      </v-list-item-subtitle>
    </v-list-item>
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

