<template>
  <v-card>
    <div class="align-center">
      <div class="red-line" />
      <slot />
      <div class="red-line" />
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

.red-line {
  height: 2px;
  background-color: #FFAB40;
  width: 250px;
}
</style>
