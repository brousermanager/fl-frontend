<script setup lang="ts"></script>

<template>
  <v-card class="mx-auto" variant="outlined">
    <v-card-title class="title">{{ props.title }}</v-card-title>
    <v-card-subtitle class="description">{{ props.description }}</v-card-subtitle>
    <v-img class="coverUrl" :src="props.cover_url"> </v-img>
  </v-card>

  <v-card-text class="bg-surface-light pt-4"> </v-card-text>
</template>

<script setup lang="ts">
import type { Podcast } from "~/models/podcast";

const props = defineProps<Podcast>();
</script>

<style scoped>
.title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}

.description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
