<script setup lang="ts">
type TTrackMetadata = {
  id: number;
  title: string;
  trackCoverUrl?: string;
  artists: TArtist[];
  trackBlob: any;
};
type TArtist = {
  id: number;
  YMid: number;
  name: string;
  artistCoverUrl?: string;
};
type TTrackDownloadUrl = { downloadLink: string | null };
type TTrackFinal = TTrackMetadata & TTrackDownloadUrl;

const response = ref<any>('')
const audioUrl = ref<any>(null);
const trackData = ref<TTrackFinal | null>(null);

async function fetchTrack() {
  try {
    const tracks: any = await $fetch(`http://localhost:3024/tracks/${222}/`);
    audioUrl.value = tracks.id;
    console.log(tracks.title);
  } catch (error) {
    console.error('Failed to fetch track:', error);
  }
}
</script>

<template>
  <button @click="fetchTrack">Fetch track</button>

  <audio v-if="audioUrl" :src="audioUrl" controls></audio>
  {{ audioUrl }}
</template>

<style scoped lang="scss"></style>
