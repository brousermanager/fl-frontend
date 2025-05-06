<template>
  <v-container>
    <v-breadcrumbs :items="breadCrumbs">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>
    <v-row>
      <v-col cols="12">
        <v-card elevation="4">
          <v-card-title>EPISODI</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <RubricaCard v-if="store.currentPodcast" :podcast="store.currentPodcast" />
      </v-col>
      <v-col cols="12" md="8">
        <RubricaList :podcasts="podcasts" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { usePodcastStore } from "~/stores/podcast";
import type { Podcast } from "~/models/podcast";

const store = usePodcastStore();
const podcasts = ref<Podcast[]>([]);
const route = useRoute();

const getCollectionNameById = (id: string) => {
  const collection = store.podcastCollections.find(
    (collection: PodcastCollection) => collection.id === id
  );
  return collection ? collection.title : "";
};

const breadCrumbs = ref([
  { title: "Home", disabled: false, href: "/" },
  { title: "Rubriche", disabled: false, href: "/rubriche" },
  { title: getCollectionNameById(route.params.collectionId) as string, disabled: true },
]);

onMounted(async () => {
  try {
    console.log("Fetching podcasts...");
    podcasts.value = await store.getPodcastsByCollection(
      route.params.collectionId as string
    );
    store.currentPodcast = podcasts.value[0];
  } catch (error) {
    console.error("Error fetching podcasts:", error);
  }
});
</script>
