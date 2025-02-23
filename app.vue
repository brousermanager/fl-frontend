<template>
  <v-app>
    <LayoutNavBar />
    <v-main>
      <NuxtPage />
      <v-fab
        :icon="hidePodcastPlayer ? 'mdi-music' : 'mdi-close'"
        location="bottom right"
        :size="hidePodcastPlayer ? 'large' : 'small'"
        app
        color="primary"
        @click="hidePodcastPlayer = !hidePodcastPlayer"
      ></v-fab>
    </v-main>

    <PodcastPlayer v-show="!hidePodcastPlayer" class="position-fixed bottom-0 w-100" />
  </v-app>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

const hidePodcastPlayer = ref(false);

const checkScroll = () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    hidePodcastPlayer.value = true;
  }
};

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
});
</script>
