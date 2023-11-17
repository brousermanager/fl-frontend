<template>
  <div class="text-center">
    <v-btn color="primary">
      {{ btnTxt }}

      <v-dialog v-model="dialog" activator="parent" width="auto">
        <v-card>
          <v-card-text>
            {{ textSource }}
          </v-card-text>
          <v-card-actions>
            <v-btn block color="primary" @click="dialog = false">Chiudi</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-btn>
  </div>
</template>

<script lang="ts" setup>
const dialog = ref(false);
const props = defineProps({
  textSource: {
    type: String,
    required: true,
  },
  btnTxt: {
    type: String,
    required: true,
  },
});
</script>
