export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig()
	const baseUrl = 'https://api.music.yandex.net:443'
	const token = config.secretToken

	const trackId = event.context.params?.trackId

	try {
		const response: any = await $fetch(`${baseUrl}/tracks/${trackId}`, {
			headers: {
				'Authorization': `OAuth ${token}`,
				'Accept-Language': 'ru',
			},
		})
		console.log("--------", response.result.library);
		return response
	}
	catch (error) {
		console.error('Error fetching data:', error)
		throw createError({
			statusCode: 500,
			statusMessage: 'Error fetching data from Yandex Music API',
		})
	}
})