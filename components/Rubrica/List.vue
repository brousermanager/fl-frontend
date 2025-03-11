<template>
  <v-container>
    <v-list>
      <v-list-item 
        v-for="(podcast, index) in podcastCollection.podcasts" 
        :key="podcast.id"
        :class="{ 'selected': selectedPodcast === podcast.id, 'ml-10 mr-10': true }"
        @click="selectedPodcast = podcast.id; emit('selectRubrica', podcast)"
      >
        <v-list-item-content>
          <v-list-item-title>
            {{ index + 1 }}. {{ podcast.title }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ podcast.description }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { PodcastCollection } from "~/models/podcastCollection";

defineProps<{ podcastCollection: PodcastCollection }>();
const emit = defineEmits(["selectRubrica"]);

const selectedPodcast = ref<string | null>(null);
</script>

<style scoped>
.selected {
  background-color: #e0e0e0;
  transform: scale(1.01);
  transition: all 0.2s ease-in-out;
}
</style>
