export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();

    const headers = getRequestHeaders(event);

    let token: string | undefined = headers.authorization?.split(" ")[1];

    if (!token) {
        token = config.secretToken || config.public.token;
    }

    const path = getRouterParam(event, "_") || "";
    const url = `https://api.music.yandex.net:443/${path}`;

    return proxyRequest(event, url, {
        headers: {
            Authorization: `OAuth ${token}`, "Accept-Language": "ru",
        }
    });
});