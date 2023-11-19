<template>
  <v-card>
    <div class="align-center">
      <div class="center-line" />
      <slot />
      <div class="center-line" />
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

.center-line {
  height: 2px;
  background-color: #ffab40;
  width: 250px;
}
</style>
