<template>
  <v-card elevation="8">
    <div class="align-center">
      <v-card class="center-line" color="primary" height="3" width="175" />
      <slot />
      <v-card class="center-line" color="primary" height="3" width="175" />
    </div>
  </v-card>
</template>

<style scoped>
.align-center {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
}
</style>
