<template>
  <v-card elevation="8" class="ma-5" hover>
    <v-row @click="redirectToCollectionPage(podcastCollection.id)">
      <v-col cols="12">
        <v-img height="225" :src="podcastCollection.cover" cover></v-img>
      </v-col>
      <v-col cols="12">
        <v-card-item>
          <v-card-title color="orange-lighten-2" class="text-h6">
            <v-icon icon="mdi-play-circle" size="small"></v-icon>
            {{ podcastCollection.title }}
          </v-card-title>
        </v-card-item>
      </v-col>
    </v-row>
    <v-card-actions>
      <v-btn color="orange-lighten-2" text="Descrizione" @click="show = !show"></v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text class="scrollable-description">
          <div>{{ podcastCollection.description }}</div>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script setup lang="ts">
import type { PodcastCollection } from "~/models/podcastCollection";

defineProps<{ podcastCollection: PodcastCollection }>(); // using like this, we can use props without defining them in the script ex. title, cover_url, description
const show = ref(false);

const redirectToCollectionPage = (collectionId: string) => {
  navigateTo(`/rubriche/${collectionId}`);
};
</script>
