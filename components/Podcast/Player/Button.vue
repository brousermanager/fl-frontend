<template>
  <div class="audio-container">
    <div>
      <audio ref="player" :src="musicSource" type="audio/mpeg" controls hidden></audio>
      <canvas ref="canvas"></canvas>
    </div>
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
import {useAVCircle} from 'vue-audio-visual';
import {ref} from 'vue';

const player = ref(null);
const canvas = ref(null);
const musicSource = '/music.mp3'; // Replace with the correct path to your music file

useAVCircle(player, canvas, {
  src: musicSource,
  canvWidth: 250,
  canvHeight: 250,
  barColor: "#FFAB40", // #FFAB40 for contrast, #BDBDBD for grey
  outlineColor: "#FFAB40",
  playtimeColor: "#BDBDBD",
  outlineWidth: 3,
  playtimeFont: "0px monospace",
  rotateGraph: true,
  playtime: false,
  progress: false,
  audioControls: false,
});

const data = reactive({
  isPlaying: false,
});

const toggleAudio = () => {
  // Access the audio element using the ref
  const audio = player.value;

  // Toggle between play and pause
  if (audio != null) {
    if (audio.paused) {
      audio.play();
      data.isPlaying = true;
    } else {
      audio.pause();
      data.isPlaying = false;
    }
  } else {
    console.log("Audio is null");
  }
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
