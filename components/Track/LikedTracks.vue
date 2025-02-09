<script setup lang="ts">
import { userLikedTracksStore } from '~/stores/userLikedTracksStore/userLikedTracksStore';
// TODO: Вынести сюда компонент Track, разделив логику на компоненты
const likedStore: any = userLikedTracksStore()

console.log(likedStore);

onMounted(() => {
  likedStore.fetchUserData()
})
</script>

<template>
  <div class="liked-tracks">
    <h2 class="liked-tracks__title">
      Понравившаяся музыка
    </h2>
    <div v-if="likedStore.trackInfo.length" class="liked-tracks__wrapper">
      <div v-for="track in likedStore.trackInfo" :key="track.id" class="liked-tracks__track">
        <div class="track">
          <img :src="track.avatar" alt="Track Avatar" class="track__avatar">
          <div class="track__info">
            <div class="track__name">
              {{ track.name }}
            </div>
            <div class="track__artist">
              {{ track.artist }}
            </div>
          </div>
        </div>
        <audio :src="track.downloadLink" controls class="track__audio" />
      </div>
    </div>
    <div v-else class="liked-tracks__empty">
      <p class="liked-tracks__empty-text">
        Треки не найдены.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/abstracts/_variables.scss" as *;

.liked-tracks {
  padding: 5px;

  border: 1px solid var(--border-color);
  border-radius: $border-radius-md;
  background-color: var(--background-color);
  border-color: var(--border-color);

  &__title {
    background-color: var(--background-color);
    padding: 5px;
    margin-bottom: 10px;

    font-size: $font-size-lg;
    font-weight: $font-weight-bold;
  }

  &__wrapper {
    background-color: var(--background-color);
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 5px;
    background-color: var(--background-color);
    border-color: var(--border-color);
  }

  &__track {
    padding: 10px;

    border: 1px solid var(--border-color);
    background-color: var(--background-color);
    transition: background-color 0.2s ease;

    &:hover {
      background-color: var(--background-color);
      border-color: var(--border-color);
    }
  }

  &__empty {
    padding: 20px;
    
    text-align: center;

    &-text {
      font-size: $font-size-sm;
      color: var(--text-color-secondary);
    }
  }
}

.track {
  display: flex;
  align-items: center;
  gap: 10px;

  width: 300px;
  margin-bottom: 10px;
  padding: 10px;

  &__avatar {
    width: 50px;
    height: 50px;

    border-radius: $border-radius-s;
    object-fit: cover;
  }

  &__info {
    flex: 1;

    min-width: 0;
  }

  &__name {
    font-size: $font-size-base;
    font-weight: $font-weight-bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__artist {
    font-size: $font-size-sm;
    color: var(--text-color-secondary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__audio {
    width: 100%;
  }
}
</style>