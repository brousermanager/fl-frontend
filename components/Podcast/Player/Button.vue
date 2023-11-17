<template>
  <AVCircle src="/music.mp3" :canv-width="300" :canv-height="300" outline-color="rgb(255, 0, 0)"
            bar-color="rgb(255, 0, 0)" progress-color="rgb(255, 0, 0)" playtime-color="rgb(255, 0, 0)"
            playtime-font="32px Monaco" :rotate-graph="true"/>
</template>

<script setup lang="ts">
import {AVCircle} from 'vue-audio-visual'
</script>
