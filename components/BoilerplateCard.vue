<template>
    <v-card :title="title" :height="cardHeight" elevation="8">
        <slot />
    </v-card>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
    const props = defineProps({
        title: {
            type: String,
            default: "Boilerplate card for understanding how to use handle spacing"
        },
        cardHeight: {
            type: String,
            default: "auto" // Default height of the card
        }
    },
    )
</script>