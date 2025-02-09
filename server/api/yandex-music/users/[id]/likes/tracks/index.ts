export default defineEventHandler(async () => {
	const config = useRuntimeConfig()
	const userId = '1296937379'
	const baseUrl = 'https://api.music.yandex.net:443'
	const token = config.secretToken

	try {
		const response = await $fetch(`${baseUrl}/users/${userId}/likes/tracks/`, {
			headers: {
				'Authorization': `OAuth ${token}`,
				'Accept-Language': 'ru',
			},
		})
		console.log("response", response);

		return response;
	}
	catch (error) {
		console.error('Error fetching data:', error)
		throw createError({
			statusCode: 500,
			statusMessage: 'Error fetching data from Yandex Music API',
		})
	}
})