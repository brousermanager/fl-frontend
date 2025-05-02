<template>
  <v-card
    elevation="8"
    hover
    class="transparent-card"
    :width="$vuetify.display.smAndDown ? '100%' : '90%'"
    rounded="lg"
  >
    <v-row no-gutters>
      <v-col cols="12" sm="6" md="5">
        <v-img
          :src="podcast.cover_url"
          :aspect-ratio="1"
          class="rounded-lg"
          cover
          height="100%"
        >
          <template v-slot:placeholder>
            <v-row align="center" justify="center" class="fill-height">
              <v-progress-circular indeterminate color="primary"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>

      <v-col cols="12" sm="6" md="7">
        <v-card-item>
          <v-card-title class="text-h5 text-sm-h4 font-weight-bold text-truncate">
            {{ podcast.title }}
          </v-card-title>
          
          <v-card-subtitle class="pt-2">
            <v-sheet class="text-truncate" max-width="100%">
              {{ podcast.description }}
            </v-sheet>
          </v-card-subtitle>
        </v-card-item>

        <v-card-text>
          <v-sheet class="text-body-2" style="max-height: 120px; overflow-y: auto">
            {{ podcast.description }}
          </v-sheet>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import type { Podcast } from "~/models/podcast";

defineProps<{ podcast: Podcast }>();
</script>