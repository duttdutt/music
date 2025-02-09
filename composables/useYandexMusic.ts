export const useYandexMusic = () => {
  const config = useRuntimeConfig();
  const data = ref("");

  const fetchData = async () => {
    const serverToken = "y0__wgBEKPjtuoEGN74BiDzjNH5ETMyh50e3BOGrrbOHQzK21pY3jc5";
    const token = config.public.token || serverToken;

    if (config.public.token.length < 10) {
      throw new Error('Please, enter valid token.')
    }

    try {
      const response = await $fetch("/api/yandex-music/account/status", {
        headers: {
          Authorization: `OAuth ${token}`,
          "Accept-Language": "ru",
        },
      });
      data.value = response;
    } catch (err) {
      console.error(err);
    }
  };

  return { data, fetchData };
};
