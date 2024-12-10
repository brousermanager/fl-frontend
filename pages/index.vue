<template>
  <v-container class="background-image">
    <v-row>
      <v-col cols="12">
        <HomeMainSlider />
      </v-col>

      <v-col cols="12" md="8">
        <v-row>
          <v-col cols="12">
            <!-- <BoilerplateCard cardHeight="300px" title="Podcast player" > -->
            <PodcastPlayer />
            <PodcastSelector />
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="4">
        <HomePodcastList :podcasts="store.podcasts" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const store = usePodcastStore();
</script>

<style scoped>
.background-image {
  background-image: url("bg.png");
  background-size: cover;
  background-position: center;
}
</style>
