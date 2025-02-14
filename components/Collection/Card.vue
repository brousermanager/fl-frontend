<template>
  <v-card elevation="8" class="ma-5" hover>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            {{ podcastCollection.title }}
          </v-card-title>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-img :src="podcastCollection.cover_url" class="ma-2" />
      </v-col>
      <v-col cols="8">
        <v-card-text>
          {{ podcastCollection.description.slice(0, 50) + "..." }}
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import type { PodcastCollection } from "~/models/podcastCollection";

defineProps<{ podcastCollection: PodcastCollection }>(); // using like this, we can use props without defining them in the script ex. title, cover_url, description
</script>
