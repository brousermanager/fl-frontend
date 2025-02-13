<template>
  <v-app>
    <LayoutNavBar />
    <v-main>
      <NuxtPage />
    </v-main>
    <PodcastPlayer v-if="!hidePodcastPlayer" class="position-fixed bottom-0 w-100" />
    <LayoutFooter />
  </v-app>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

const hidePodcastPlayer = ref(false)

const checkScroll = () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    hidePodcastPlayer.value = true
  } else {
    hidePodcastPlayer.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>