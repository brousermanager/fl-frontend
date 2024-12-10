import { defineStore } from "pinia";
import axios from "axios";

import type { Podcast } from "~/models/podcast";

export const usePodcastStore = defineStore("podcast", () => {
  const count = ref(0);
  const currentPodcast = ref({}) as Ref<Podcast>;
  const currentPage = ref(1);
  const podcasts = ref([]) as Ref<Podcast[]>;
  const loading = ref(false) as Ref<boolean>;
  const error = ref(null) as Ref<string | null>;

  const getPodcasts = async (page: number = 1, pageSize: number = 10) => {
    loading.value = true;
    try {
      const response = await axios.get(
        `${useRuntimeConfig().public.REST_API_URL}/podcast?page=${page}&page_size=${pageSize}`
      );
      console.log(response);
      const data = await response.data;
      podcasts.value = data.results;
      count.value = data.count;
      currentPage.value = page;
    } catch (err: unknown) {
      if (err instanceof Error) {
        error.value = err.message;
      } else {
        error.value = "An unexpected error occurred";
      }
    } finally {
      loading.value = false;
    }
  };

  const updateCurrentPodcast = (podcast: Podcast) => {
    currentPodcast.value = podcast;
  };

  return {
    loading,
    error,
    podcasts,
    getPodcasts,
    updateCurrentPodcast,
    currentPodcast,
  };
});
