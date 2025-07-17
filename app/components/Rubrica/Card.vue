<template>
  <v-row>
    <v-col cols="12" class="d-flex justify-center">
      <v-card elevation="8">
        <v-img :width="250" :src="podcast.cover_url" aspect-ratio="1/1" cover>
          <template #placeholder>
            <v-row align="center" justify="center" class="fill-height">
              <v-progress-circular indeterminate color="primary"/>
            </v-row>
          </template>
        </v-img>
      </v-card>
    </v-col>
    <v-col cols="12" class="d-flex flex-column align-center">
      <v-card variant="plain">
        <v-card-text class="text-center font-weight-bold">
          {{ podcast.title }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import type { Podcast } from "@@/models/podcast";

defineProps<{ podcast: Podcast }>();
</script>
