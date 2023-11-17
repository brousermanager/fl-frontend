<template>
  <div class="center-container size-container color-container margin-container">
    <slot/>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.center-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.size-container {
  width: 80vw;
  height: 450px;
}

.color-container {
  background-color: #404040;
}

.margin-container {
  margin: 80px;
}

</style>
