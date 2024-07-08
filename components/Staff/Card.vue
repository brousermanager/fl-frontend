<template>
  <v-card
    class="mx-auto"
    width="300"
    :title="staff.name"
    :text="staff.description"
    theme="dark"
  >
    <v-img :src="staff.image" cover />
  </v-card>
</template>

<script setup>
  const { staff } = defineProps(["staff"]);
</script>
