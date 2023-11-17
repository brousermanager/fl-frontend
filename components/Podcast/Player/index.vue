<template>
  <div class="center-container">
    <AVCircle src="/music.mp3"/>
  </div>
</template>

<script setup lang="ts">
import {AVCircle} from 'vue-audio-visual'
</script>

<style scoped>
.center-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
