<template>
<VuetifyAudio
  :file="file"
  color="success"
  :ended="audioFinish"
  downloadable
></VuetifyAudio>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue";
import VuetifyAudio from 'vuetify3-audio-player'

const file = ref('https://podcast-fl.s3.amazonaws.com/MP3_PODCAST/Noi_Ortadini_Intervista_.mp3')
const store = usePodcastStore();
// const file = ref("");
const { podcast } = defineProps(['podcast']);

watch(
  () => store.currentPodcast,
  (podcast: any) => {
    file.value = podcast.audio_url;
  }
);

</script>


// Attributes

//     file (String) (Required): Set audio file for the audio player
//     ended (Function) (Optional): Set callback function name after audio finish
//     canPlay (Function) (Optional): Set callback function name when audio ready for playing
//     color (String) (Optional): Set all component buttons color
//     autoPlay (Boolean) (Optional, default is false): Add it to make the audio auto play, but in some web browsers maybe failed, because some browsers need user active in the page first then allow sound auto play.
//     downloadable (Boolean) (Optional, default is false): Add it to let the audio file can be downloaded.
//     minimal (Boolean) (Optional, default is false): Sets the player to be minimal (Reduces size).
//     flat (Boolean) (Optional, default is false): When set to true, make the Vuetify Card style to flat, that you can combine other information/image/data with this control in your page.
//     playIcon (String) (Optional, default is mdi-play): Set the icon for play
//     pauseIcon (String) (Optional, default is mdi-pause): Set the icon for pause
//     stopIcon (String) (Optional, default is mdi-stop): Set the icon for stop
//     refreshIcon (String) (Optional, default is mdi-refresh): Set the icon for refresh
//     downloadIcon (String) (Optional, default is mdi-download): Set the icon for download
//     volumeHighIcon (String) (Optional, default is mdi-volume-high): Set the icon for volume
//     volumeMuteIcon (String) (Optional, default is mdi-volume-mute): Set the icon for mute


