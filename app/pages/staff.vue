<template>
  <v-container>
    <v-breadcrumbs :items="breadCrumbs">
      <template #divider>
        <v-icon icon="mdi-chevron-right"/>
      </template>
    </v-breadcrumbs>
    <hr style="background-color: white" >
    <v-row class="justify-center py-5">
      <v-col v-for="member in staff" cols="12" md="3">
        <StaffCard :staff="member" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const breadCrumbs = ref([
  { title: "Home", disabled: false, href: "/" },
  { title: "Staff", disabled: true, href: "/staff" },
]);

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
