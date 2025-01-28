<template>
  <v-container class="background-image">
    <v-row>
      <v-col cols="12">
        <HomeMainSlider />
      </v-col>

      <v-col cols="12" md="12">
        <v-row>
          <v-col cols="12">
            <PodcastPlayer />
            <PodcastScroll/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.background-image {
  background-image: url("bg.png");
  background-size: cover;
  background-position: center;
}
</style>
