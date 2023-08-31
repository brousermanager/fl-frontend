<template>
    <v-carousel hide-delimiter-background cycle interval="4000" :show-arrows="false">
      <v-carousel-item v-for="(image, index) in images" :key="index">
        <v-img :src="image.src" cover></v-img>
      </v-carousel-item>
    </v-carousel>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          { src: '1.jpg' },
          { src: '2.jpg' },
          { src: '3.jpg' }
        ]
      };
    }
  };
  </script>
