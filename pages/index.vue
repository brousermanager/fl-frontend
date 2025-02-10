<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <HomeMainSlider />
      </v-col>

      <v-col cols="12" md="12">
        <v-row>
          <v-col cols="12">
            <PodcastScroll/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  <PodcastPlayer class="position-fixed bottom-0 w-100" />


</template>