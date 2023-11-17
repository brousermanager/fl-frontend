<template>
  <HomeMainSlider></HomeMainSlider>
  <v-main>
    <SessoDialog
        btnTxt="Merda di edo"
        textSource="Merda di edo"
    />
    <PodcastPlayer/>
  </v-main>
</template>

<script lang="ts" setup>
const itemStore = useItemStore();
const videoPath = "/a.mp4";

const player = ref<VideoPlayer>();

const playerState = shallowRef<VideoPlayerState>();

const playerConfig = shallowRef<VideoPlayerProps>({
  autoplay: false,
  controls: true,
  fluid: true,
  loop: false,
  height: 360,
  muted: false,
  playbackRates: [0.7, 1.0, 1.5, 2.0, 2.5, 5.0, 10.0],
  playbackRate: 1.0,
  poster: "/your-path/poster.jpg",
  sources: [
    {
      src: videoPath,
      type: "video/mp4",
    },
  ],
  volume: 0.5,
});

const mediaConfig = shallowRef<VideoPlayerProps>({
  sources: [
    {
      src: videoPath,
      type: "video/mp4",
    },
  ],
  poster: "/your-path/poster.jpg",
});
</script>
