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
            <!-- </BoilerplateCard> -->
          </v-col>
          <v-col cols="12">
            <BoilerplateCard cardHeight="400px" title="Social posts" />
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="4">
      {{ store.podcasts }}
        <PodcastSelector
          v-for="podcast in store.podcasts"
          :podcast="podcast"
          :key="podcast.id"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const store = usePodcastStore();

await store.getPodcasts();

</script>

<style scoped>
.background-image {
  background-image: url('bg.png');
  background-size: cover;
  background-position: center;
}
</style>