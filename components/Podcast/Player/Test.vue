<template>
  <div class="btn-section">
    <button type="button" @click="toggleAudio()">Play Music</button>
  </div>

  <div>
    <audio ref="player" :src="musicSource" type="audio/mpeg" controls hidden></audio>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAVCircle } from 'vue-audio-visual';

const player = ref(null);
const canvas = ref(null);
const musicSource = '/music.mp3'; // Replace with the correct path to your music file

useAVCircle(player, canvas, {
  src: musicSource,
  canvHeight: 300,
  canvWidth: 1000,
  barColor: 'lime',
});

const toggleAudio = () => {
  // Access the audio element using the ref
  const audio = player.value;

  // Toggle between play and pause
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
};
</script>

<style>
/* Your styles here */
</style>
