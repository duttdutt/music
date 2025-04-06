<script setup lang="ts">
import VueLogo from '~/assets/svg/Vue_Logo.svg'
import NuxtLogo from '~/assets/svg/Nuxt_Logo.svg'
import SCSSLogo from '~/assets/svg/SASS_Logo.svg'
import PiniaLogo from '~/assets/svg/Pinia_Logo.svg'
import GitHubLogo2 from '~/assets/svg/GitHub_Logo2.svg'
import GitHubLogo from '~/assets/svg/GitHub_Logo.svg'

const colorMode = useColorMode();
</script>

<template>
  <footer>
    <div class="left">
      <Logo :image-url="VueLogo" link-url="/" />
      <Logo :image-url="NuxtLogo" link-url="/" />
      <Logo :image-url="PiniaLogo" link-url="/" />
      <Logo :image-url="SCSSLogo" link-url="/" />
    </div>
    <div class="middle">
      <Logo :image-url="colorMode.value === 'light' ? GitHubLogo : GitHubLogo2" link-url="/" />
    </div>
    <div class="right">
      <ToggleThemeButton />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../assets/scss/abstracts" as *;
@use "../assets/scss/mixins" as *;

footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  gap: 10px;

  height: 70px;

  @include shadows;
  border: 1px solid var(--border-color);
  border-radius: $border-radius-md;

  .left,
  .middle,
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
}
</style>
