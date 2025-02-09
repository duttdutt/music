import { defineStore } from 'pinia'

export const useYandexMusicStore = defineStore('yandexMusic', () => {
  const initialData = ref<any>(null)
  
  const fetchData = async () => {
    try {
      const { data } = await useFetch("/api/yandex-music/account/status")
      initialData.value = data
      return initialData.value;
    } catch (err: any) {
      console.log(err);
      initialData.value = null
    }
  }

  return {
    initialData,
    fetchData,
  }
})
