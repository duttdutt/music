<script setup>
defineProps({
  linkUrl: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
})
</script>

<template>
  <NuxtLink :to="linkUrl" class="logo">
    <img :src="imageUrl" alt="logo" class="logo-image">
  </NuxtLink>
</template>


<style scoped lang="scss">
@use "../assets/scss/abstracts" as *;
@use "../assets/scss/mixins" as *;

.logo {
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;

  .logo-image {
    width: 40px;
    height: 40px;

    padding: 5px;

    border-radius: $border-radius-s;
    border: 1px solid var(--border-color);

    transition: all 0.3s;

    &:hover {
      border: 1px solid var(--border-color-hover);
      background-color: var(--background-color-secondary);
    }
  }
}
</style>