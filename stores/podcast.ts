import { defineStore } from 'pinia';
import axios from 'axios';

export const usePodcastStore = defineStore('podcast', () => {
    const podcasts = ref([]);

    const fetchPodcasts = async () => {
        try {
            const response = await axios.get('https://fl-backend.replit.app/podcast/', { timeout: 5000 });
            const data = await response.data;
            console.log('Podcasts:', data);
            podcasts.value = data;
        } catch (error) {
            console.error('Failed to fetch podcasts:', error);
        }
    };

    return {
        podcasts,
        fetchPodcasts
    };
});