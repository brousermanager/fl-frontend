<template>
  <v-card :title="podcast.title">
    <v-card-text class="podcast-list">
      {{ podcast.description }}
      <v-container>
        <audio
          ref="audio"
          :src="audioUrl"
          @timeupdate="updateTime"
          @loadedmetadata="setDuration"
          @ended="resetTime"
          hidden
        />
        Duration: {{ duration }} / Current time: {{ currentTime }} / Progress:
        {{ progress }} / Slider progress: {{ sliderProgress }}
        <v-btn icon @click="togglePlay">
          <v-icon>{{ isPlaying ? "mdi-pause" : "mdi-play" }}</v-icon>
        </v-btn>
        <v-slider
          v-model="sliderProgress"
          :min="0"
          :max="100"
          color="primary"
          @input="seek"
        />
      </v-container>
    </v-card-text>
  </v-card>
</template>


<script setup lang="ts">
import { ref, watch, computed } from "vue";

const store = usePodcastStore();
const audioUrl = ref("");
const { podcast } = defineProps(['podcast']);

watch(
  () => store.currentPodcast,
  (podcast: any) => {
    audioUrl.value = podcast.audio_url;
  }
);

const audio: Ref<null | HTMLAudioElement> = ref(null);
const isPlaying = ref(false);
const currentTime = ref(0);
const duration = ref(0);

const progress = computed(() => (currentTime.value / duration.value) * 100);
const sliderProgress = computed({
  get: () => progress.value,
  set: (value) => {
    currentTime.value = (value / 100) * duration.value;
  },
});

const updateTime = () => {
  currentTime.value = audio.value.currentTime;
};

const setDuration = () => {
  duration.value = audio.value.duration;
};

const resetTime = () => {
  currentTime.value = 0;
  isPlaying.value = false;
};

const togglePlay = () => {
  if (isPlaying.value) {
    audio.value.pause();
  } else {
    audio.value.play();
  }
  isPlaying.value = !isPlaying.value;
};

const seek = (value) => {
  audio.value.currentTime = (value / 100) * audio.value.duration;
};
</script>

<style scoped>
  .podcast-list {
    overflow-y: auto;
    height: 650px;
  }
</style>
