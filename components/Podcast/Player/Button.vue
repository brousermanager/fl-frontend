<template>
  <div class="audio-container">
    <audio ref="foo" src="/music.mp3"></audio>
    <AVCircle v-bind="audioVisualConfig" ref="audioCircle" :audio="foo"/>
    <div @click="toggleAudio" class="play-button">
      <!-- Play/Pause button SVG -->
      <svg
          v-if="data.isPlaying"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
      >
        <rect x="4" y="4" width="6" height="16"></rect>
        <rect x="14" y="4" width="6" height="16"></rect>
      </svg>
      <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
      >
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import {AVCircle} from 'vue-audio-visual';
import {reactive, ref} from 'vue';

const audioVisualConfig = {
  src: "/music.mp3",
  canvWidth: 250,
  canvHeight: 250,
  barColor: "#FFAB40", // #FFAB40 for contrast, #BDBDBD for grey
  outlineColor: "#FFAB40",
  playtimeColor: "#BDBDBD",
  outlineWidth: 4,
  playtimeFont: "0px monospace",
  rotateGraph: true,
  playtime: false,
  progress: false,
  audioControls: false, // TODO: Comment this line to test audio
};

const data = reactive({
  isPlaying: false,
});

const foo = ref<HTMLAudioElement | null>(null);

const toggleAudio = async () => {
  const audioElement = foo.value;

  if (audioElement && !data.isPlaying) {
    await audioElement.play();
  } else if (audioElement) {
    audioElement.pause();
  }

  data.isPlaying = !data.isPlaying;
};
</script>

<style scoped>
.audio-container {
  position: relative;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  cursor: pointer;
}

.play-button svg {
  width: 100%;
  height: 100%;
  fill: #BDBDBD;
}
</style>
