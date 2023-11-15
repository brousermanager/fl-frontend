<template>
  <v-container>
    <v-row align="center" justify="center">
      <!--
      v-for For per componenti
      key Quale componenti sto renderizzando
      i -> indice
      :key (":") significa che e' javascript, altrimenti sarebbe una stringa
       -->
      <v-col
          v-for="(variant, i) in variants"
          :key="i"
          cols="auto"
      >
        <v-card
            class="mx-auto"
            max-width="344"
            :variant="variant"
        >
          <v-card-item>
            <div>
              <div class="text-overline mb-1">
                {{ variant }}
              </div>
              <div class="text-h6 mb-1">
                Headline
              </div>
              <div class="text-caption">Greyhound divisely hello coldly fonwderfully</div>
            </div>
          </v-card-item>

          <v-card-actions>
            <v-btn>
              Button
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const variants = ['elevated', 'flat', 'tonal', 'outlined', 'text']
</script>
