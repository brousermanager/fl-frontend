import { defineStore } from "pinia";
import axios from "axios";

import type { Podcast } from "@@/models/podcast";
import type { PodcastCollection } from "@@/models/podcastCollection";

export const usePodcastStore = defineStore("podcast", () => {
	const count = ref(0);
	const currentPodcast = ref({}) as Ref<Podcast>;
	const podcasts = ref([]) as Ref<Podcast[]>;
	const podcastCollections = ref([]) as Ref<PodcastCollection[]>;
	const loading = ref(false) as Ref<boolean>;
	const error = ref(null) as Ref<string | null>;

	const getPodcastCollections = async () => {
		loading.value = true;
		try {
			const response = await axios.get(`${useRuntimeConfig().public.REST_API_URL}/podcast-collection`);
			console.log(response);
			const data = (await response.data) as PodcastCollection[];
			podcastCollections.value = data;
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

	const getPodcasts = async (page: number = 1, pageSize: number = 10) => {
		loading.value = true;
		try {
			console.log("getPodcasts", page, pageSize);
			const response = await axios.get(
				`${useRuntimeConfig().public.REST_API_URL}/podcast?page=${page}&page_size=${pageSize}`
			);
			const data = await response.data;
			podcasts.value.push(...data.results);
			count.value = data.count;
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

	const getPodcastsByCollection = async (collectionId: string): Promise<Podcast[]> => {
		loading.value = true;
		let data: Podcast[] = [];
		try {
			const response = await axios.get(`${useRuntimeConfig().public.REST_API_URL}/podcast/collection/${collectionId}`);
			data = (await response.data) as Podcast[];
			console.log("getPodcastsByCollection", data);
		} catch (err: unknown) {
			if (err instanceof Error) {
				error.value = err.message;
			} else {
				error.value = "An unexpected error occurred";
			}
		}
		loading.value = false;
		return data;
	};

	const updateCurrentPodcast = (podcast: Podcast) => {
		currentPodcast.value = podcast;
	};

	return {
		loading,
		error,
		podcasts,
		podcastCollections,
		getPodcasts,
		updateCurrentPodcast,
		getPodcastCollections,
		getPodcastsByCollection,
		currentPodcast
	};
});
