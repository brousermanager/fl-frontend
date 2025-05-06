<template>
  <v-row>
    <v-col cols="12">
      <v-card elevation="4">
        <v-card-title>LE NOSTRE RUBRICHE</v-card-title>
      </v-card>
    </v-col>
    <v-col
      cols="12"
      lg="4"
      xl="3"
      sm="6"
      v-for="(collection, index) in podcastCollections"
      :key="index"
    >
      <CollectionCard :podcastCollection="collection" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const store = usePodcastStore();

const props = defineProps<{
  limit?: number | undefined;
}>();
const podcastCollections = computed(() => {
  if (props.limit) {
    return store.podcastCollections.slice(0, props.limit);
  }
  return store.podcastCollections;
});
</script>
