

<template>
    <v-card
      class="mx-auto"
      max-width="344"
      @click="playSong">
      <v-img
        height="200px"
        :src="podcast.cover_file"
        cover
      ></v-img>
  
      <v-card-title>
        {{ podcast.title }}
      </v-card-title>
  
      <v-card-actions>
        <v-btn
          color="orange-lighten-2"
          text="Explore"
        ></v-btn>
  
        <v-spacer></v-spacer>
  
        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></v-btn>
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          <v-card-text>
            {{ podcast.description }}
            </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </template>

<script setup>

const show = ref(false);

const props = defineProps({
    podcast: {
        type: Object,
        required: true
    }

});

const playSong = () => {
    // Logic to play the song
};

const addToPlaylist = () => {
    // Logic to add the song to a playlist
};

const likeSong = () => {
    // Logic to like the song
};
</script>