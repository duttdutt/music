<script setup lang="ts">
interface Props {
  imageUrl: string;
  linkUrl?: string;
}

defineProps<Props>()
</script>

<template>
  <!-- #790EAD -->
   <!-- # -->
  <NuxtLink :to="linkUrl" class="logo" role="img">
    <img :src="imageUrl" alt="" class="logo__image" width="40" height="40">
  </NuxtLink>
</template>

<style scoped lang="scss">
.logo {
  --logo-size: 40px;
  --border-width: 1px;
  --animation-duration: 0.3s;

  display: grid;
  place-items: center;
  position: relative;
  width: var(--logo-size);
  height: var(--logo-size);
  padding: 5px;
  border: var(--border-width) solid var(--border-color);
  transition:
    width var(--animation-duration) ease,
    height var(--animation-duration) ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    border: 0 solid transparent;
    transition:
      width var(--animation-duration) ease,
      height var(--animation-duration) ease;
  }

  &::before {
    bottom: calc(-1 * var(--border-width));
    right: calc(-1 * var(--border-width));
    border-bottom: var(--border-width) solid var(--border-color-hover);
    border-right: var(--border-width) solid var(--border-color-hover);
  }

  &::after {
    top: calc(-1 * var(--border-width));
    left: calc(-1 * var(--border-width));
    border-top: var(--border-width) solid var(--border-color-hover);
    border-left: var(--border-width) solid var(--border-color-hover);
  }

  &:hover {
    &::before,
    &::after {
      width: 120%;
      height: 120%;
    }
  }
}

.logo__image {
  display: block;
  object-fit: contain;
}
</style>
