<template>
  <DefaultSectionContainer>
    <div class="align-center">
      <div class="red-line" />
      <slot />
      <div class="red-line" />
    </div>
  </DefaultSectionContainer>
</template>

<script setup lang="ts">
import DefaultSectionContainer from "~/components/Default/Section/Container.vue";
</script>

<style scoped>
.align-center {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
}

.red-line {
  height: 2px;
  background-color: red;
  width: 250px;
}
</style>
