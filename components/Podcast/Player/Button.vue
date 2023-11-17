<template>
  <AVCircle v-bind="audioVisualConfig"/>
</template>

<script setup lang="ts">
import {AVCircle} from 'vue-audio-visual'

const audioVisualConfig = {
  src: '/music.mp3',
  canvWidth: 250,
  canvHeight: 250,
  outlineColor: 'red',
  barColor: 'red',
  progressColor: 'red',
  playtimeColor: 'red',
  playtimeFont: '48px monospace',
  rotateGraph: true,
};
</script>
