import { defineStore } from "pinia";
import axios from "axios";


export const usePodcastStore = defineStore("podcast", () => {
  const currentPodcast = ref({}) as Ref<any>;
  const podcasts = ref([]) as Ref<any[]>;
  const loading = ref(false) as Ref<boolean>;
  const error = ref(null) as Ref<string | null>;

  const getPodcasts = async () => {

    loading.value = true;
    try {
      const response = await axios.get(
        `${useRuntimeConfig().public.REST_API_URL}/podcast/`
      );
      const data = await response.data;
      podcasts.value = data;
      currentPodcast.value = podcasts[0];
    } catch (err: unknown) {
      if (err instanceof Error) {
        error.value = err.message;
      } else {
        error.value = 'An unexpected error occurred';
      }
    } finally {
      loading.value = false;
    }
  }


  const updateCurrentPodcast = (podcast: any) => {
    currentPodcast.value = podcast;
  };

  return {
    podcasts,
    getPodcasts,
    updateCurrentPodcast,
    currentPodcast
  };
});
