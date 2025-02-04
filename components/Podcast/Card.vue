<script setup lang="ts"></script>

<template>
  <v-card class="mx-auto" variant="outlined">
    <v-card-title class="title">{{ props.title }}</v-card-title>
    <v-card-subtitle class="description">{{ props.description }}</v-card-subtitle>
    <v-img class="coverUrl" :src="props.cover_url"> </v-img>
  </v-card>
</template>

<script setup lang="ts">
import type { Podcast } from "~/models/podcast";

const props = defineProps<Podcast>();
</script>

<!-- <style scoped>
.coverUrl {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style> -->