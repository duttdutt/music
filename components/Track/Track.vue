<script setup lang="ts">
defineProps<{
	trackAvatar: string
	trackName: string | null
}>()
</script>

<template>
	<div class="track">
		<img :src="trackAvatar" alt="No avatar" class="track__avatar">
		<p class="track__name">
			{{ trackName || 'Название трека отсутствует' }}
		</p>
	</div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/abstracts/_variables.scss" as *;

.track {
  display: flex;
  align-items: center;
  gap: 10px;

  &__avatar {
    width: 37px;
    height: 37px;
    object-fit: cover;

    border: 1px solid var(--border-color);
    border-radius: $border-radius-circle;
  }

  &__name {
    font-size: $font-size-sm;
    font-weight: $font-weight-base;
  }
}
</style>