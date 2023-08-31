<template>
  <v-app>
    <div>
      <SideBar />
      <HeaderMenu />
      <NuxtPage />
    </div>
  </v-app>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const REST_API_URL = config.public["REST_API_URL"];
</script>
