<template>
  <v-main>
    <v-container>
      <SessoDialog
        textSource="Merda di edo"
        btnTxt="Merda di edo"
      />
      <v-sheet class="pa-12" outlined elevation="12" rounded>
        <v-row>
          <video-player
            :class="[
              'video-player',
              'vjs-big-play-centered',
              { loading: !state },
            ]"
            :sources="mediaConfig.sources"
            :poster="mediaConfig.poster"
            :fluid="playerConfig.fluid"
            :loop="playerConfig.loop"
            crossorigin="anonymous"
            playsinline
            :width="680"
            v-model:height="playerConfig.height"
            v-model:volume="playerConfig.volume"
            v-model:playbackRate="playerConfig.playbackRate"
            v-model:controls="playerConfig.controls"
            v-model:muted="playerConfig.muted"
            v-model:playbackRates="playerConfig.playbackRates"
          />
          <av-waveform :src="mediaConfig.sources[0].src"></av-waveform>
        </v-row>
      </v-sheet>
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
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
