<script setup lang="ts">
const colorMode = useColorMode()

const toggle = (): void => {
  colorMode.value === "light"
    ? colorMode.value = "dark"
    : colorMode.value = "light"
}
</script>



<template>
  <button @click="toggle">Toggle Theme</button>
</template>



<style lang="scss" module>
@use "../assets/scss/abstracts/variables" as *;

button {
  padding: 5px 10px;

  transition: all .3s;

  background-color: var(--background-color-secondary);
  border: 1px solid var(--border-color);
  border-radius: $border-radius-s;
  font-family: $font-family-base;
  font-weight: $font-weight-semibold;
  letter-spacing: 0.5px;

  &:hover {
    color: var(--text-yellow);
    background-color: var(--background-color-hover);
    border-color: var(--border-color-hover);
  }

  &:focus {
    background-color: var(--background-color-active);
    border-color: var(--text-yellow);
  }

  &:active {
    background-color: var(--background-color-active);
    border-color: var(--text-yellow);
  }
}
</style>