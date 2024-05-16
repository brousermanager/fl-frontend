<template>
  <v-container>
    <v-card @click="playSong">
      <v-row>
        <v-col cols="8">
          <div>
            <v-card-title class="text-h5">
              {{ podcast.title }}
            </v-card-title>

            <v-card-subtitle>{{ podcast.description }}</v-card-subtitle>

            <v-card-actions>
              <v-btn class="ms-2" icon="mdi-play" variant="text"></v-btn>
            </v-card-actions>
          </div>
        </v-col>
        <v-col cols="4">
          <v-avatar class="ma-3" size="125">
            <v-img :src="podcast.cover_file"></v-img>
          </v-avatar>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup>
const store = usePodcastStore();

const props = defineProps({
  podcast: {
    type: Object,
    required: true,
  },
});
const playSong = () => {
  store.updateCurrentPodcast(props.podcast);
};
</script>
