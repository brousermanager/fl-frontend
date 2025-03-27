<template>
  <v-container>
    <v-list>
      <v-list-item 
        v-for="(podcast, index) in podcasts" 
        :key="podcast.id"
        :class="{ 'selected': selectedPodcast === podcast.id, 'ml-10 mr-10': true }"
        @click="selectPodcast(podcast)"
      >
        <v-list-item-title>
          {{ index + 1 }}. {{ podcast.title }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ podcast.description }}
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Podcast } from "~/models/podcast";

defineProps<{ podcasts: Podcast[] }>();
const emits = defineEmits(["selectRubrica"]);

const selectedPodcast = ref<string | null>(null);

const selectPodcast = (p: Podcast) => {
  selectedPodcast.value = p.id;
  emits("selectRubrica", p);
};
</script>

<style scoped>
.selected {
  transform: scale(1.01);
  transition: all 0.2s ease-in-out;
}
</style>
