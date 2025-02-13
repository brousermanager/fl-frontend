<template>
  <v-footer class="d-flex flex-column">
    <div class="d-flex w-100 align-center px-4">
      <strong>Visita i nostri profili social!</strong>

      <v-spacer></v-spacer>

      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="mx-4"
        size="small"
        variant="plain"
      ></v-btn>
    </div>

    <div class="px-4 py-2 bg-black text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Radio Frequenza Libera</strong>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
const icons = ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"];
</script>
