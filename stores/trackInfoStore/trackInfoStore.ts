import type { TrackInfo, TrackInfoResponse } from './trackInfoStore.types'
import { defineStore } from 'pinia'

export const useTrackInfoStore = defineStore('trackInfo', () => {
	/* Track Download Info */
	const trackDownloadInfoData = ref<string | null | any>(null)
	/* Track Info */
	const trackInfoData = ref<TrackInfo | null>(null)
	const trackName = ref<string | null>(null)
	const trackAvatar = ref('')
	const trackArtist = ref('')
	const trackArtistCover = ref('')

	function setTrackDownloadInfoData(data: string) {
		trackDownloadInfoData.value = data
	}

	function setTrackInfoData(data: TrackInfo) {
		trackInfoData.value = data
		trackName.value = data.title
		trackAvatar.value = `https://${data.ogImage.slice(0, -2)}100x100`
		trackArtist.value = data.artists[0].name
		trackArtistCover.value = `https://${data.artists[0].cover.uri.slice(0, -2)}50x50`
	}

	async function fetchTrackDownloadInfoData(trackId: string) {
		try {
			const downloadData = await $fetch<any>(`/api/yandex-music/tracks/${trackId}`)
			const data = await $fetch(`/api/yandex-music/tracks/${trackId}/download-info`)

			if (data) {
				setTrackDownloadInfoData(data)
				setTrackInfoData(downloadData.result[0])
			}
		}
		catch (err) {
			console.error('Failed to fetch track download info:', err)
		}
	}



	return {
		trackInfoData,
		trackName,
		trackAvatar,
		trackArtist,
		trackArtistCover,
		trackDownloadInfoData,
		fetchTrackDownloadInfoData
	}
})