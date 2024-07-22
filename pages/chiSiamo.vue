<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-img src="/chiSiamo.jpg" style="height: 100vh;" />
    </v-col>
    <v-col cols="12" md="6">
      <v-container class="d-flex align-center justify-center height-max">
        <v-card title="Questo è un titolo">
          <v-card-text>
            Qui invece c'è anche un testo più lungo. Così si può scrivere la lista della spesa, ma anche il cazzo che me ne frega,
            perché questo è lo spazio libero, ceh il corpo, il testo, lu body. Insomma cher è.
          </v-card-text>
          <v-card-actions>
            <v-btn text="Bottone" />
          </v-card-actions>
        </v-card>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
//
</script>

<style scoped>
@media (min-width: 768px) {
  .height-max {
    height: 100vh;
  }
}

</style>
