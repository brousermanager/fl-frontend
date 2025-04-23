<template>
  <v-container>
    <h1>Staff</h1>
    <hr style="background-color: white" />
    <v-row class="justify-center py-5">
      <v-col v-for="member in staff" cols="12" md="3">
        <StaffCard :staff="member" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const staff = ref([
  {
    name: "Edo",
    description: "Fa le pompe",
    image: "/staff/edo.jpg",
    social: "https://www.instagram.com/paulino_edoardo/",
  },
  {
    name: "Andrea",
    description: "Il bombone",
    image: "/staff/edo.jpg",
    social: "https://www.instagram.com/andreabombone/",
  },
  {
    name: "Edo",
    description: "Fa le pompe",
    image: "/staff/edo.jpg",
    social: "https://www.instagram.com/paulino_edoardo/",
  },
  {
    name: "Andrea",
    description: "Il bombone",
    image: "/staff/edo.jpg",
    social: "https://www.instagram.com/andreabombone/",
  },
  {
    name: "Edo",
    description: "Fa le pompe",
    image: "/staff/edo.jpg",
    social: "https://www.instagram.com/paulino_edoardo/",
  },
  {
    name: "Andrea",
    description: "Il bombone",
    image: "/staff/edo.jpg",
    social: "https://www.instagram.com/paulino_edoardo/",
  },
]);
</script>
