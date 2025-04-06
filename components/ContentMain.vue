<script setup lang="ts"></script>

<template>
  <main>
    <slot />
  </main>
</template>

<style lang="scss" scoped>
@use "../assets/scss/abstracts" as *;
@use "../assets/scss/mixins" as *;

main {
  @include shadows;
  border: 1px solid var(--border-color);
  border-radius: $border-radius-md;
}
</style>
