<template>
  <AVCircle src="/music.mp3" :canv-width="250" :canv-height="250" outline-color="red" bar-color="red"
            progress-color="red" playtime-color="red" playtime-font="48px monospace" :rotate-graph="true"/>
</template>

<script setup lang="ts">
import {AVCircle} from 'vue-audio-visual'
</script>
