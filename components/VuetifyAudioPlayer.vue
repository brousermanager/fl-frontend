<template>
  <v-footer app order="-1" color="#212121">
    <v-sheet color="#212121" width="100%" height="100%">
      <v-row cols="12">
        <v-progress-linear
          :color="color"
          hide-details
          :height="8"
          v-model="percentage"
          clickable
          @click="setPosition()"
          :disabled="!loaded"
        ></v-progress-linear>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="6" md="3">
          <v-row cols="12" justify="start" align="center">
            <v-btn icon="mdi-rewind" variant="text" @click="rewind()"></v-btn>
            <v-btn
              size="x-large"
              icon="mdi-pause"
              variant="text"
              @click="playing ? pause() : play()"
            >
              <v-icon size="x-large" v-if="!playing || paused">{{ playIcon }}</v-icon>
              <v-icon size="x-large" v-else>{{ pauseIcon }}</v-icon>
            </v-btn>
            <v-btn icon="mdi-fast-forward" variant="text" @click="fastForward()"></v-btn>
          </v-row>
          <v-row cols="12" justify="start" align="center">
            <v-card-subtitle> {{ duration }}/{{ currentTime }} </v-card-subtitle>
          </v-row>
        </v-col>

        <v-col cols="6" md="5">
          <v-row justify="center" align="center">
            <v-col cols="3">
              <v-img aspect-ratio="1/1" :src="image" height="75px"></v-img>
            </v-col>

            <v-col cols="9">
              <v-card-title>
                {{ title }}
              </v-card-title>

              <v-card-subtitle v-if="subtitle">
                {{ subtitle }}
              </v-card-subtitle>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="2" v-if="!mobile">
          <v-slider
            :color="color"
            v-if="!minimal"
            v-model="playerVolume"
            rounded
            thumb-size="10"
            hide-details
            max="1"
            step="0.01"
            min="0"
            density="compact"
            class="mr-12"
          >
            <template #prepend>
              <v-icon v-if="!isMuted" @click="mute()" :color="color">
                {{ volumeHighIcon }}
              </v-icon>
              <v-icon v-else @click="mute()" :color="color">
                {{ volumeMuteIcon }}
              </v-icon>
            </template>
          </v-slider>
        </v-col>
      </v-row>
    </v-sheet>
  </v-footer>

  <audio
    id="player"
    ref="player"
    v-on:ended="ended"
    v-on:canplay="canPlay"
    :src="file"
  ></audio>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";

const { width, mobile } = useDisplay();
// Props
const props = defineProps({
  image: { type: String, default: null },
  title: { type: String, default: "No current playing..." },
  subtitle: { type: String },
  flat: { type: Boolean, default: false },
  file: { type: String, default: null },
  autoPlay: { type: Boolean, default: false },
  ended: { type: Function as PropType<(payload: Event) => void>, default: () => {} },
  canPlay: { type: Function as PropType<(payload: Event) => void>, default: () => {} },
  minimal: { type: Boolean, default: false },
  color: { type: String, default: null },
  downloadable: { type: Boolean, default: false },
  playIcon: { type: String, default: "mdi-play" },
  pauseIcon: { type: String, default: "mdi-pause" },
  stopIcon: { type: String, default: "mdi-stop" },
  refreshIcon: { type: String, default: "mdi-refresh" },
  downloadIcon: { type: String, default: "mdi-download" },
  volumeHighIcon: { type: String, default: "mdi-volume-high" },
  volumeMuteIcon: { type: String, default: "mdi-volume-mute" },
});

// Utility function
const formatTime = (second: number): string =>
  new Date(second * 1000).toISOString().slice(11, 19);

// Data
const firstPlay = ref(true);
const isMuted = ref(false);
const isOnRepeat = ref(false);
const loaded = ref(false);
const playing = ref(false);
const paused = ref(false);
const percentage = ref(0);
const currentTime = ref("00:00:00");
const totalDuration = ref(0);
const playerVolume = ref(0.5);
const audio = ref<HTMLAudioElement | null>(null);

// Computed
const duration = computed(() => (audio.value ? formatTime(totalDuration.value) : ""));

// Watchers
watch(playerVolume, (v) => {
  isMuted.value = v <= 0;
});

// Methods
function setPosition() {
  if (audio.value) {
    audio.value.currentTime = parseInt(
      (audio.value.duration / 100) * percentage.value + ""
    );
  }
}

function fastForward() {
  if (audio.value) {
    audio.value.currentTime += 10;
  }
}
function rewind() {
  if (audio.value) {
    audio.value.currentTime -= 10;
  }
}

function stop() {
  if (audio.value) {
    audio.value.pause();
    paused.value = true;
    playing.value = false;
    audio.value.currentTime = 0;
  }
}

function switchIsOnRepeat() {
  isOnRepeat.value = !isOnRepeat.value;
}

function play() {
  if (playing.value || !audio.value) return;
  audio.value.play().then(() => (playing.value = true));
  paused.value = false;
}

function pause() {
  paused.value = !paused.value;
  if (audio.value) {
    paused.value ? audio.value.pause() : audio.value.play();
  }
}

function download() {
  if (audio.value) audio.value.pause();
  window.open(props.file as string, "download");
}

function mute() {
  isMuted.value = !isMuted.value;
  playerVolume.value = isMuted.value ? 0 : 0.5;
  if (audio.value) audio.value.muted = isMuted.value;
}

function reload() {
  if (audio.value) audio.value.load();
}

function _handleLoaded() {
  if (audio.value && audio.value.readyState >= 2) {
    if (audio.value.duration === Infinity) {
      audio.value.currentTime = 1e101;
      audio.value.ontimeupdate = () => {
        audio.value!.ontimeupdate = () => {};
        audio.value!.currentTime = 0;
        totalDuration.value = parseInt(String(audio.value!.duration));
        loaded.value = true;
      };
    } else {
      totalDuration.value = parseInt(String(audio.value.duration));
      loaded.value = true;
    }
    if (props.autoPlay && audio.value) audio.value.play();
  } else {
    throw new Error("Failed to load sound file");
  }
}

function _handlePlayingUI() {
  if (audio.value) {
    audio.value.volume = playerVolume.value;
    percentage.value = (audio.value.currentTime / audio.value.duration) * 100;
    currentTime.value = formatTime(audio.value.currentTime);
    playing.value = true;
  }
}

function _handlePlayPause(e: Event) {
  if (!audio.value) return;
  if (e.type === "play" && firstPlay.value) {
    audio.value.currentTime = 0;
    firstPlay.value = false;
  }
  if (e.type === "pause" && !paused.value && !playing.value) {
    currentTime.value = "00:00:00";
  }
}

function _handleEnded() {
  if (audio.value) {
    if (isOnRepeat.value) {
      audio.value.play();
    } else {
      paused.value = playing.value = false;
    }
  }
}

function init() {
  if (audio.value) {
    audio.value.addEventListener("timeupdate", _handlePlayingUI);
    audio.value.addEventListener("loadeddata", _handleLoaded);
    audio.value.addEventListener("pause", _handlePlayPause);
    audio.value.addEventListener("play", _handlePlayPause);
    audio.value.addEventListener("ended", _handleEnded);
  }
}

// Lifecycle hooks
onMounted(() => {
  // Assumes a template ref with id="player" exists in the template.
  audio.value = document.querySelector("#player") as HTMLAudioElement;
  init();
});

onBeforeUnmount(() => {
  if (audio.value) {
    audio.value.removeEventListener("timeupdate", _handlePlayingUI);
    audio.value.removeEventListener("loadeddata", _handleLoaded);
    audio.value.removeEventListener("pause", _handlePlayPause);
    audio.value.removeEventListener("play", _handlePlayPause);
    audio.value.removeEventListener("ended", _handleEnded);
  }
});

defineExpose({
  play,
  pause,
  stop,
  mute,
  download,
  reload,
  switchIsOnRepeat,
  setPosition,
});
</script>
