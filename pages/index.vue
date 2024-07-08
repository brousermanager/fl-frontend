<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <HomeMainSlider />
      </v-col>

      <v-col cols="12" md="8">
        <v-row>
          <v-col cols="12">
            <!-- <BoilerplateCard cardHeight="300px" title="Podcast player" > -->
            <PodcastPlayer :podcast="podcast" />
            <!-- </BoilerplateCard> -->
          </v-col>
          <v-col cols="12">
            <BoilerplateCard cardHeight="400px" title="Social posts" />
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="4">
        <HomePodcastList :podcasts="podcasts" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  console.log(process.env.REST_API_URL)
  import { ref } from "vue";

  const store = usePodcastStore();

  await store.getPodcasts();

  const podcasts = ref([
    {
      title: 'Nome del podcast',
      description: 'Descrizione del podcast',
      image: '1.jpg',
      url: 'dwofw'
    },
    {
      title: 'Nome del podcast',
      description: 'Descrizione del podcast',
      image: '2.jpg',
      episodes: [
        {
          name: 'Ciao ciao',
          url: 'geongoergr'
        },
        {
          name: 'Salve',
          url: 'gmrogrrg'
        },
        {
          name: 'Buongiorno',
          url: 'ekinverivnei'
        }
      ]
    },
    {
      title: 'Nome del podcast',
      description: 'Descrizione del podcast',
      image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
      url: 'grg'
    }
  ]);

  const podcast = {
    title: 'Podcast d\'esempio',
    description: 'Descrizione del podcast d\'esempio'
  };
</script>
