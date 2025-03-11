<template>
  <v-row>
    <v-col cols="12">
      <v-card elevation="8">
        <v-card-title>EPISODI</v-card-title>
      </v-card>
    </v-col>
    <v-col>
      <RubricaCard />
    </v-col>
    <v-col>
      <RubricaList @selectRubica="selectRubrica"/>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import { ref } from "vue";

const rubrica = ref(null);

const selectRubrica = (r) => {
  rubrica.value = r;
};
</script>
