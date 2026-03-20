<template>
	<v-app :style="appShellStyle">
		<LayoutRailDrawer />

		<v-main :style="mainStyle">
			<NuxtPage />

			<PodcastPlayer />
		</v-main>
	</v-app>
</template>
<script setup lang="ts">
	import { computed } from "vue";
	import { usePodcastStore } from "@@/stores/podcast";
	import { useDisplay } from "vuetify";

	const store = usePodcastStore();
	const { smAndDown } = useDisplay();

	const appShellStyle = computed(() => ({
		minHeight: "100dvh",
		backgroundImage: "url('/tisfondo.svg')",
		backgroundPosition: smAndDown.value ? "top center" : "center",
		backgroundRepeat: smAndDown.value ? "repeat-y" : "no-repeat",
		backgroundSize: smAndDown.value ? "auto" : "cover",
		backgroundAttachment: smAndDown.value ? "scroll" : "fixed"
	}));

	const mainStyle = {
		// background: "transparent",
		minHeight: "100dvh"
	};

	onBeforeMount(async () => {
		await store.getPodcastCollections();
	});
</script>
