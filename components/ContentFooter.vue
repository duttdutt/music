<script setup lang="ts">
import VueLogo from '~/assets/svg/Vue_Logo.svg'
import NuxtLogo from '~/assets/svg/Nuxt_Logo.svg'
import SCSSLogo from '~/assets/svg/SASS_Logo.svg'
import PiniaLogo from '~/assets/svg/Pinia_Logo.svg'
import GitHubLogo2 from '~/assets/svg/GitHub_Logo2.svg'
</script>

<template>
  <footer>
    <div class="with">
      <Logo linkUrl="/" :image-url="VueLogo" />
      <Logo linkUrl="/" :image-url="NuxtLogo" />
      <Logo linkUrl="/" :image-url="PiniaLogo" />
      <Logo linkUrl="/" :image-url="SCSSLogo" />
    </div>
    <div>
      <Logo linkUrl="/" :image-url="GitHubLogo2" />
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

  .with {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    p {
      font-size: $font-size-md;
      font-weight: $font-weight-semibold;
    }
  }
}
</style>