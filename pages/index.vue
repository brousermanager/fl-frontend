<template>
  <v-main>
    <v-container>
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
          <BoilerplateCard cardHeight="600px" title="Podcast list" />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
