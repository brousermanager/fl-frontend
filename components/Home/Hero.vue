<template>
  <v-parallax
    :src="image"
    height="50vh"
  >
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 class="text-h2 font-weight-thin mb-4">
        Radio Frequenza Libera
      </h1>
      <h3 class="subheading">
        La radio per le tue orecchie e non solo :>
      </h3>
    </div>
  </v-parallax>
</template>

<script setup>
const image = 'bg.png'
</script>
