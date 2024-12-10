<template>
	<v-list>
		<v-list-item v-for="item in store.podcasts" :key="item.id">
			<v-col cols="12">
				<v-card :color="getCardColor(item)" @click="updateCurrentPodcast(item)">
					<div class="d-flex flex-no-wrap justify-space-between">
						<div>
							<v-card-title class="text-h5">
								{{ item.title }}
							</v-card-title>

							<v-card-subtitle>{{ item.description }}</v-card-subtitle>
						</div>

						<v-avatar class="ma-3" rounded="0" size="125">
							<v-img :src="item.cover_url" />
						</v-avatar>
					</div>
				</v-card>
			</v-col>
		</v-list-item>
	</v-list>
	<v-divider :thickness="5" class="ma-2"></v-divider>
</template>

<script setup lang="ts">
	import { usePodcastStore } from "~/stores/podcast";
	import type { Podcast } from "~/models/podcast";

	const store = usePodcastStore();

  const getCardColor = (podcast: Podcast) => {
    return podcast.id === store.currentPodcast.id ? "#952175" : "#2E2250";
  };

	const updateCurrentPodcast = (newPodcast: Podcast) => {
		const podcast = store.podcasts.find((p) => p.id === newPodcast.id);
		if (podcast) {
			store.updateCurrentPodcast(podcast);
		}
	};

	const loadPodcasts = async () => {
		await store.getPodcasts();
		if (store.podcasts.length > 0) {
			store.updateCurrentPodcast(store.podcasts[0]);
		}
	};

	onMounted(() => {
		loadPodcasts();
	});
</script>

<style scoped>
.text-crop {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>