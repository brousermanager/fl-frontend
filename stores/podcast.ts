import { defineStore } from "pinia";
import axios from "axios";

export const usePodcastStore = defineStore("podcast", () => {
  const podcasts = ref([]);
  const currentPodcast = ref(null);

  const fetchPodcasts = async () => {
    try {
      const response = await axios.get(
        "https://fl-backend.replit.app/podcast/",
        { timeout: 5000 }
      );
      const data = await response.data;
      console.log("Podcasts:", data);
      podcasts.value = data;
      currentPodcast.value = data[0];
    } catch (error) {
      console.error("Failed to fetch podcasts:", error);
    }
  };

  const updateCurrentPodcast = (podcast: any) => {
    currentPodcast.value = podcast;
  };

  return {
    podcasts,
    fetchPodcasts,
    updateCurrentPodcast,
    currentPodcast,
  };
});
