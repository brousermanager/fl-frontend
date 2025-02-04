<script setup lang="ts"></script>

<template>
  <v-col>
    <v-row>
      <v-card class="w-100">
        <v-card-title class="text-subtitle-1">
          {{ title }}
        </v-card-title>
      </v-card></v-row
    >
    <v-row>
      <v-col>
        <v-img :src="cover_url" max-height="200px"></v-img> 
        </v-col>
        <v-col>
          <v-card-text class="text-caption truncated-text">
            {{ description }}
          </v-card-text>
        </v-col>
      </v-row>
  </v-col>
</template>

<script setup lang="ts">
import type { Podcast } from "~/models/podcast";

const show = ref(false);
const props = defineProps<Podcast>();
</script>

<style scoped>
.truncated-text {
  max-height: 200px; /* Same as the image max-height */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6; /* Adjust the number of lines as needed */
  -webkit-box-orient: vertical;
}
</style>