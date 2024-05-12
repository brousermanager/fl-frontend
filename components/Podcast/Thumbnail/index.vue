<template>
    <v-card @click="playSong">
        <v-img :src="thumbnailUrl" :alt="podcast.cover_file" height="200"></v-img>
        <v-card-title>{{ podcast.title }}</v-card-title>
        <v-card-actions>
            <v-btn text @click="addToPlaylist">Add to Playlist</v-btn>
            <v-btn text @click="likeSong">Like</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>

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