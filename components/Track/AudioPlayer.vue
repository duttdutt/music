<script setup lang="ts">
// TODO: Создать кастомный аудиоплеер
// TODO: Создать возможность переключения очереди
defineProps({
	audioSrc: String,
})
</script>

<template>
	<div class="audio-player">
		<slot />
		<audio controls :src="audioSrc" class="audio-player__controls" />
	</div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/abstracts/_variables.scss' as *;

.audio-player {
  display: flex;
  flex-direction: column;
  gap: 5px;

  padding: 10px;
  margin: 10px 0;

  border: 1px solid var(--border-color);
  border-radius: $border-radius-md;
  background-color: var(--background-color);

  &__controls {
    width: 100%;
  }
}
</style>