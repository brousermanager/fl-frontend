<template>
  <v-card
    class="mx-auto hover-card"
    width="300"
    theme="dark"
  >
    <v-img :src="staff.image" cover height="300">
      <div class="hover-overlay d-flex align-center justify-center">
        <a :href="staff.social" target="_blank" rel="noopener">
          <v-icon size="48" color="white">mdi-link</v-icon>
        </a>
      </div>
    </v-img>

    <v-card-title>{{ staff.name }}</v-card-title>
    <v-card-text>{{ staff.description }}</v-card-text>
  </v-card>
</template>

<script setup>
const { staff } = defineProps({
  staff: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.hover-card {
  position: relative;
  overflow: hidden;
}

.hover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(33, 150, 243, 0.8); /* blu con opacità */
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.hover-card:hover .hover-overlay {
  opacity: 1;
}
</style>
