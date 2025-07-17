<template>
	<v-container fluid class="d-flex flex-column">
		<v-breadcrumbs :items="breadCrumbs">
			<template #divider>
				<v-icon icon="mdi-chevron-right"/>
			</template>
		</v-breadcrumbs>
		<v-row>
			<v-col cols="12">
				<v-card elevation="4">
					<v-card-title>EPISODI</v-card-title>
				</v-card>
			</v-col>
		</v-row>

		<v-row md="8">
			<v-col>
				<RubricaCard v-if="store.currentPodcast" :podcast="store.currentPodcast" />
			</v-col>
			<v-col cols="12" md="8" style="max-height: 300px">
				<RubricaList :podcasts="podcasts" class="h-100" />
			</v-col>
		</v-row>

		<v-row>
			<v-col>
				<v-card variant="outlined">
					<v-card-text class="text-left font-weight-bold">
						{{ store.currentPodcast.description }}
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup lang="ts">
	import { usePodcastStore } from "@@/stores/podcast";
	import type { Podcast } from "@@/models/podcast";
	import type { PodcastCollection } from "@@/models/podcastCollection";

	const store = usePodcastStore();
	const podcasts = ref<Podcast[]>([]);
	const route = useRoute();

	const getCollectionNameById = (id: string) => {
		const collection = store.podcastCollections.find((collection: PodcastCollection) => collection.id === id);
		return collection ? collection.title : "";
	};

	const breadCrumbs = ref([
		{ title: "Home", disabled: false, href: "/" },
		{ title: "Rubriche", disabled: false, href: "/rubriche" },
		{
			title: getCollectionNameById(route.params.collectionId) as string,
			disabled: true
		}
	]);

	onMounted(async () => {
		try {
			console.log("Fetching podcasts...");
			podcasts.value = await store.getPodcastsByCollection(route.params.collectionId as string);
			store.currentPodcast = podcasts.value[0];
		} catch (error) {
			console.error("Error fetching podcasts:", error);
		}
	});
</script>
