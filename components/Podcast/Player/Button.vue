<template>
  <div @click="startAudio">
    <AVCircle v-bind="audioVisualConfig" />
  </div>
</template>

<script setup lang="ts">
import { AVCircle } from "vue-audio-visual";

// TODO: Check https://www.npmjs.com/package/vue-audio-visual

const audioVisualConfig = {
  src: "/music.mp3",
  canvWidth: 250,
  canvHeight: 250,
  barColor: "#FFAB40", // #FFAB40 for contrast, #BDBDBD for grey
  outlineColor: "#FFAB40",
  playtimeColor: "#BDBDBD",
  playtimeFont: "48px monospace",
  rotateGraph: true,
  playtime: false,
  progress: false,
  //  audioControls: false, // TODO: Comment this line to test audio
};

const startAudio = () => {
  // TODO: Fix this
  //  audioVisualConfig.audioControls = !audioVisualConfig.audioControls;
};
</script>
