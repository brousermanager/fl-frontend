<template>
  <v-card elevation="8">
    <v-carousel
      :show-arrows="false"
      cycle
      hide-delimiter-background
      interval="4000"
    >
      <v-carousel-item v-for="(image, index) in images" :key="index">
        <v-img :src="image.src" cover></v-img>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script setup>

  const images = [{ src: "logo.png" }, { src: "logo.png" }, { src: "logo.png" }];

</script>
