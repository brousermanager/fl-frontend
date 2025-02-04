<template>
  <v-infinite-scroll direction="horizontal" @load="load">
    <template v-for="item in items" :key="item.id">
      <div class="d-flex flex-no-wrap justify-space-between">
        <v-sheet
  class="d-flex align-center justify-center hover-effect"
  :width="width"
  :color="getCardColor(item.id)"
  @click="updateCurrentPodcast(item.id)"
>
  <div class="d-flex flex-no-wrap justify-space-between">
    <v-avatar class="ma-3" rounded="0" size="125">
      <v-img :src="item.cover_url" />
    </v-avatar>
  </div>
</v-sheet>
        <v-divider vertical :thickness="5" class="ma-2"></v-divider>
      </div>
    </template>
  </v-infinite-scroll>
  {{ store.currentPodcast }}
</template>

<script setup lang="ts">
import { ref } from "vue";
import { usePodcastStore } from "~/stores/podcast";
import type { Podcast } from "~/models/podcast";
import { computed } from "vue";
import { useDisplay } from "vuetify";

const items = ref<Podcast[]>([]);
const store = usePodcastStore();
let currentPage = 1;
const pageSize = 10;

const load = async ({
  side,
  done,
}: {
  side: "end" | "start" | "both";
  done: (status: "error" | "loading" | "empty" | "ok") => void;
}) => {
  try {
    await store.getPodcasts(currentPage, pageSize);
    if (store.podcasts.length > 0) {
      items.value = store.podcasts;
      currentPage++;
      done("ok");
    } else {
      done("empty");
    }
  } catch (error) {
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
  return podcastId === store.currentPodcast.id ? 'secondary' : 'darkPrimary';
};


const { name } = useDisplay();

const width = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case "xs":
      return 150;
    case "sm":
      return 200;
    case "md":
      return 300;
    case "lg":
      return 400;
    case "xl":
      return 400;
    case "xxl":
      return 400;
  }
});

</script>


<style scoped>
.hover-effect {
  transition: transform 0.3s ease;
}

.hover-effect:hover {
  transform: translateY(-10px);
}
</style>