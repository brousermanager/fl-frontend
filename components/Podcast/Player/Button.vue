<template>
  <div class="audio-container">
    <AVCircle v-bind="audioVisualConfig" ref="audioCircle"/>
    <div @click="toggleAudio" class="play-button">
      <!-- Play/Pause button SVG -->
      <svg v-if="data.isPlaying"
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           stroke-width="2"
           stroke-linecap="round"
           stroke-linejoin="round">
        <rect x="4" y="4" width="6" height="16"></rect>
        <rect x="14" y="4" width="6" height="16"></rect>
      </svg>
      <svg v-else
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           stroke-width="2"
           stroke-linecap="round"
           stroke-linejoin="round">
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import {AVCircle} from 'vue-audio-visual'
import {reactive, ref} from 'vue';

// TODO: Check https://www.npmjs.com/package/vue-audio-visual

const audioVisualConfig = {
  src: '/music.mp3',
  canvWidth: 250,
  canvHeight: 250,
  barColor: 'red',
  outlineColor: 'red',
  playtimeColor: 'red',
  playtimeFont: '0px monospace',
  rotateGraph: true,
  playtime: false,
  progress: false,
  audioControls: false,
};

const data = reactive({
  isPlaying: false,
});

const audioCircle = ref<InstanceType<typeof AVCircle> | null>(null);

const toggleAudio = async () => {
  console.log("audioCircle:", audioCircle.value); // Log to check the value of audioCircle
  console.log("audioCircle.value:", audioCircle.value);
  console.log("audioCircle.value.audio:", audioCircle.value?.audio);


  if (!data.isPlaying && audioCircle.value?.audio) {
    console.log("Playing");
    // Check if the audio is loaded before playing
    if (audioCircle.value.audio.readyState >= 3) {
      await audioCircle.value.audio.play();
    } else {
      // If not loaded, you might want to wait for it to load before playing
      await new Promise((resolve) => {
        audioCircle.value.audio.addEventListener('canplaythrough', resolve, { once: true });
      });
      await audioCircle.value.audio.play();
    }
  } else if (audioCircle.value?.audio) {
    audioCircle.value.audio.pause();
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
  fill: red;
}
</style>
