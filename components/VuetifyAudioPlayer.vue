<template>
  <v-card
    style="text-align: center"
    :flat="flat == undefined || flat == false ? false : true"
  >
    <v-card-text>
      <v-row>
        <v-col class="px-0 mx-0 text-caption">{{ currentTime }}</v-col>
        <v-col :cols="minimal ? 6 : 8">
          <v-progress-linear
            :color="color"
            hide-details
            v-model="percentage"
            :height="20"
            clickable
            rounded
            @click="setPosition()"
            :disabled="!loaded"
          ></v-progress-linear>
        </v-col>
        <v-col class="px-0 mx-0 text-caption">{{ duration }}</v-col>
      </v-row>
    </v-card-text>
    <audio
      id="player"
      ref="player"
      v-on:ended="ended"
      v-on:canplay="canPlay"
      :src="file"
    ></audio>

    <v-card-actions>
      <v-row>
        <v-col cols="6">
          <v-spacer v-if="minimal"></v-spacer>
          <v-btn
            variant="outlined"
            icon
            :size="minimal ? 'small' : 'default'"
            class="ma-2"
            :color="color"
            @click="playing ? pause() : play()"
            :disabled="!loaded"
          >
            <v-icon v-if="!playing || paused">{{ playIcon }}</v-icon>
            <v-icon v-else>{{ pauseIcon }}</v-icon>
          </v-btn>
          <v-btn
            variant="outlined"
            :size="minimal ? 'small' : 'default'"
            icon
            class="ma-2"
            :color="color"
            @click="stop()"
            :disabled="!loaded"
          >
            <v-icon>{{ stopIcon }}</v-icon>
          </v-btn>

          <v-btn
            variant="outlined"
            :size="minimal ? 'small' : 'default'"
            icon
            class="ma-2"
            :color="color"
            @click="loaded ? download() : reload()"
            v-if="loaded && downloadable"
          >
            <v-icon>{{ downloadIcon }}</v-icon>
          </v-btn>
          <v-btn
            v-if="minimal"
            variant="outlined"
            :size="minimal ? 'small' : 'default'"
            icon
            class="ma-2"
            :color="color"
            @click="mute()"
            :disabled="!loaded"
          >
            <v-icon>{{ isMuted ? volumeMuteIcon : volumeHighIcon }}</v-icon>
          </v-btn>
        </v-col>
        <v-spacer></v-spacer>

        <v-col cols="6" md="5" xl="3">
          <v-slider
            v-if="!minimal"
            v-model="playerVolume"
            rounded
            thumb-size="15"
            hide-details
            :color="color"
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
        <v-col cols="0" md="1" xl="3" />
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
// Props
const props = defineProps({
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
