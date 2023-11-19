<template>
  <v-app-bar app>
    <v-spacer />
    <v-btn text @click="navigateTo('/')">Home</v-btn>
    <v-btn text @click="navigateTo('staff')">Staff</v-btn>
    <v-btn text @click="navigateTo('chiSiamo')">Chi Siamo</v-btn>
    <v-btn text @click="navigateTo('rubriche')">Rubriche</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    navigateTo(page) {
      window.location.href = page;
    },
  },
};
</script>
