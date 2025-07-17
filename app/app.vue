<template>
	<v-app>
		<LayoutRailDrawer />

		<v-main>
			<NuxtPage />

			<PodcastPlayer />
		</v-main>
	</v-app>
</template>
<script setup lang="ts">
	import { usePodcastStore } from "@@/stores/podcast";

	const store = usePodcastStore();

	onBeforeMount(async () => {
		await store.getPodcastCollections();
	});
</script>
