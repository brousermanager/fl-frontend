<template>
  <v-app>
    <v-main>
      <SideBar/>
      <HeaderMenu/>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();
const REST_API_URL = config.public["REST_API_URL"];
</script>
