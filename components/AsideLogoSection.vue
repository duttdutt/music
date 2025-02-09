<script setup lang="ts">
</script>

<template>
  <section class="logo">
    <NuxtLink to="/">
      Reimagined<span class="yellow">Yandex</span><span class="red">Music</span>
    </NuxtLink>
  </section>
</template>

<style scoped lang="scss">
@use "../assets/scss/abstracts" as *;
@use "../assets/scss/mixins" as *;

.logo {
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;

  @include shadows;
  font-size: $font-size-lg;
  border: 1px solid var(--border-color);
  border-radius: $border-radius-md;

  .router-link-active {
    text-decoration: none;
    user-select: none;
    font-weight: $font-weight-bold;

    .yellow {
      color: var(--text-yellow);
    }

    .red {
      color: var(--text-red);
    }
  }
}
</style>