<template>
  <v-infinite-scroll direction="horizontal" @load="load">
    <template v-for="item in items" :key="item.id">
      <v-container>
        <PodcastCard
          class="hover-effect"
          :podcast="item"
          :color="getCardColor(item.id)"
          @click="updateCurrentPodcast(item.id)"
        />
      </v-container>
      <v-divider vertical />
    </template>
  </v-infinite-scroll>
</template>

<script setup lang="ts">
import { usePodcastStore } from "@@/stores/podcast";
import type { Podcast } from "@@/models/podcast";

const items = ref<Podcast[]>([]);
const store = usePodcastStore();
const currentPage = ref(1);
const pageSize = 10;

const load = async ({
  _side,
  done,
}: {
  _side: "end" | "start" | "both";
  done: (status: "error" | "loading" | "empty" | "ok") => void;
}) => {
  try {
    await store.getPodcasts(currentPage.value, pageSize);
    if (store.podcasts.length > 0) {
      items.value = store.podcasts;
      currentPage.value++;
      done("ok");
    } else {
      done("empty");
    }
  } catch (error) {
    console.error("Error loading podcasts:", error);
    done("error");
  }
};

const updateCurrentPodcast = (podcastId: string) => {
  const podcast = store.podcasts.find((p) => p.id === podcastId);
  if (podcast) {
    console.log("updateCurrentPodcast", podcast.id);
    store.updateCurrentPodcast(podcast);
  }
};

const getCardColor = (podcastId: string) => {
  return podcastId === store.currentPodcast.id ? "secondary" : "darkPrimary";
};
</script>

<style scoped>
.hover-effect {
  transition: transform 0.3s ease;
}
.hover-effect:hover {
  transform: scale(1.05);
}
</style>
