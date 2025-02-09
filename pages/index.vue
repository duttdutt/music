<script setup lang="ts">
import LikedTracks from '~/components/Track/LikedTracks.vue';
import AudioPlayer from '~/components/Track/AudioPlayer.vue';
import Track from '~/components/Track/Track.vue';
import { useYandexMusicStore } from '~/stores/accountStore/accountStore';
import { userLikedTracksStore } from '~/stores/userLikedTracksStore/userLikedTracksStore';
import { useTrackInfoStore } from '~/stores/trackInfoStore/trackInfoStore';

const tracksStore = userLikedTracksStore();

const test2 = async () => {
  if (!tracksStore.likedTracks) {
    await tracksStore.fetchUserData()
  }

  console.log(tracksStore.likedTracks);
}

/* Initializing useYandexMusicStore */
/* Testing [likes] */
// закинуть путь в server
// сделать запрос через useFetch
// отобразить результат в шаблоне
const store = useYandexMusicStore();
await store.fetchData();



/* Testing [trackId] */
// сделать запрос через useFetch
// отобразить результат в шаблоне
const { data } = useFetch('/api/yandex-music/tracks/1000')
console.log(data);
const { data: info } = useFetch('/api/yandex-music/tracks/1000/download-info')
console.log(info);

const trackInfoStore = useTrackInfoStore()

const trackId = ref('1000')
const audioSrc = ref('')
const trackName = ref<null | string>(null)
const trackAvatar = ref('')

async function fetchTrackDownloadInfo() {
  if (!trackId.value) {
    return
  }

  const downloadInfo: any = trackInfoStore.trackDownloadInfoData
  audioSrc.value = downloadInfo.downloadLink

  trackName.value = trackInfoStore.trackName
  trackAvatar.value = trackInfoStore.trackAvatar
}

onMounted(async () => {
  await trackInfoStore.fetchTrackDownloadInfoData(trackId.value)
})
</script>

<template>
  <div>
    <div class="input">
			<input
				v-model="trackId"
				class="input__field"
				placeholder="Enter track ID"
			>
			<button class="input__button" @click="fetchTrackDownloadInfo">
				Fetch Track
			</button>
		</div>

		<AudioPlayer :audio-src="audioSrc">
			<Track :track-avatar="trackAvatar" :track-name="trackName" />
		</AudioPlayer>
		<LikedTracks />
  </div>
</template>
