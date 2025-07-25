<template>
    <v-row align="center" no-gutters class="pa-4">
      <v-col>
        <v-window v-model="currentSlide" show-arrows>
          <v-window-item
            v-for="(slideGroup, slideIndex) in podcastSlides"
            :key="slideIndex"
            :value="slideIndex"
          >
            <v-row
              justify="center"
              align="center"
              no-gutters
              class="flex-nowrap, px-4" 
            >
              <v-col
                v-for="podcast in slideGroup"
                :key="podcast.id"
                :class="[
                  'transition-opacity',
                  'transition-transform',
                  isCurrentPodcast(podcast) ? 'opacity-100' : 'opacity-50'
                ]"
                @mouseenter="onCardHover($event, podcast)"
                @mouseleave="onCardLeave($event, podcast)"
              >
                <RubricaCard
                  :podcast="podcast"
                  @click="selectPodcast(podcast)"
                  @mouseenter="onCardHover($event, podcast)"
                  @mouseleave="onCardLeave($event, podcast)"
                />
              </v-col>
            </v-row>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
</template>

<script setup lang="ts">
import type { Podcast } from "@@/models/podcast";

interface Props {
  podcasts: Podcast[];
  currentPodcast: Podcast;
  itemsPerSlide?: number;
}

interface Emits {
  (e: "update:currentPodcast", podcast: Podcast): void;
}

const emit = defineEmits<Emits>();
const currentSlide = ref<number>(0);
const props = withDefaults(defineProps<Props>(), {itemsPerSlide: 5});

const podcastSlides = computed(() => {
  if (props.podcasts.length === 0) return [];

  const slides = [];
  for (let i = 0; i < props.podcasts.length; i += props.itemsPerSlide) {
    slides.push(props.podcasts.slice(i, i + props.itemsPerSlide));
  }
  return slides;
});

const isCurrentPodcast = (podcast: Podcast) => {
  return props.currentPodcast && podcast.id === props.currentPodcast.id;
};

watch(
  () => props.podcasts,
  (newPodcasts) => {
    if (
      newPodcasts.length > 0 &&
      (!props.currentPodcast ||
        !newPodcasts.find((p) => p.id === props.currentPodcast.id))
    ) {
      currentSlide.value = 0;
      const firstPodcast = newPodcasts[0];
      if (firstPodcast) {
        emit("update:currentPodcast", firstPodcast);
      }
    }
  },
  { immediate: true }
);

const selectPodcast = (podcast: Podcast) => {
  emit("update:currentPodcast", podcast);
};

const onCardHover = (event: Event, podcast: Podcast) => {
  const target = event.target as HTMLElement;
  const wrapper = target.closest("div") as HTMLElement;
  if (wrapper && !isCurrentPodcast(podcast)) {
    wrapper.style.opacity = "1";
  }
};

const onCardLeave = (event: Event, podcast: Podcast) => {
  const target = event.target as HTMLElement;
  const wrapper = target.closest("div") as HTMLElement;
  if (wrapper && !isCurrentPodcast(podcast)) {
    wrapper.style.opacity = "0.5";
  }
};
</script>
