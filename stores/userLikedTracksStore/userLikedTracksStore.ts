import { useTrackInfoStore } from '../trackInfoStore/trackInfoStore'
import type { LikedTrack, LikedTracksResponse, TrackInfo } from './userLikedTracksStore.types.js'
import { defineStore } from 'pinia'

export const userLikedTracksStore = defineStore('userLikedStore', () => {
	const likedTracks = ref<string[]>([])
	const twelveLikedTracks = ref<string[]>([])
	const trackInfo = ref<TrackInfo[]>([])

	function setLikedTracks(data: string[]): void {
		likedTracks.value = data
		twelveLikedTracks.value = data.slice(0, 12)
	}

	function toArray(arrayFrom: LikedTrack[]): string[] {
		return arrayFrom.map(track => track.id)
	}

	async function fetchUserData() {
		try {
			const response = await $fetch<LikedTracksResponse>('/api/yandex-music/users/:id/likes/tracks')

			if (response) {
				const trackIds = toArray(response.result.library.tracks)
				setLikedTracks(trackIds)
				await fetchTrackInfoForLikedTracks()
			}
		}
		catch (e) {
			console.log(e)
		}
	}

	async function fetchTrackInfoForLikedTracks() {
		const trackInfoStore = useTrackInfoStore()
		trackInfo.value = []

		for (const trackId of twelveLikedTracks.value) {
			await trackInfoStore.fetchTrackDownloadInfoData(trackId)

			if (trackInfoStore.trackInfoData && trackInfoStore.trackDownloadInfoData) {
				trackInfo.value.push({
					id: trackId,
					name: trackInfoStore.trackName || 'Unknown Track',
					avatar: trackInfoStore.trackAvatar,
					artist: trackInfoStore.trackArtist,
					downloadLink: trackInfoStore.trackDownloadInfoData.downloadLink,
				})
			}
		}
	}

	return {
		likedTracks,
		twelveLikedTracks,
		trackInfo,
		fetchUserData,
	}
})