<template>
  <v-row>
    <v-col cols="12">
      <v-card elevation="8">
        <v-card-title>LE NOSTRE RUBRICHE</v-card-title>
      </v-card>
    </v-col>
    <v-col cols="6" v-for="(collection, index) in store.podcastCollections" :key="index">
        <CollectionCard :podcastCollection="collection" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const store = usePodcastStore();
store.getPodcastCollections();
</script>
