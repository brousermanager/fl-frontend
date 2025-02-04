<script setup lang="ts"></script>

<template>
  <v-card class="mx-auto" variant="outlined">
    <v-card-title class="title"> {{ title }} </v-card-title>
    <v-card-subtitle class="description"> {{ description }} </v-card-subtitle>
    <v-img class="cover_url" :src="cover_url" cover>
    </v-img>
  </v-card>
</template>

<script setup lang="ts">
import type { Podcast } from "~/models/podcast";

const props = defineProps<Podcast>();
</script>