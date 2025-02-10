<script setup lang="ts"></script>

<template>
  <v-col>
    <v-row>
      <v-card class="w-100">
        <v-card-title>
          {{ title }}
        </v-card-title>
      </v-card></v-row
    >
    <v-row>
      <v-col cols="12" md="4">
        <v-img :src="cover_url"></v-img>
      </v-col>
      <v-col cols="12" md="8">
        <v-card-text>
          {{ description.slice(0, 70) + "..." }}
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
