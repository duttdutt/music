<script setup lang="ts">
const colorMode = useColorMode()

const toggle = () => {
  colorMode.value === "light"
    ? colorMode.value = "dark"
    : colorMode.value = "light"
}
</script>



<template>
  <div class="layout">

    <aside>
      <AsideLogoSection />
      <AsideNavSection />
      <AsideUserSection />
      <ToggleThemeButton />
    </aside>
    <div class="content">
      <ContentMain>
        <slot />
      </ContentMain>
      <ContentFooter />
    </div>
  </div>
</template>



<style lang="scss" scoped>
.layout {
  padding: 20px;
  display: flex;
  min-height: 100vh;
  gap: 10px;

  aside {
    display: flex;
    flex-direction: column;
    gap: 10px;

    width: 350px;
  }

  .content {
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    gap: 10px;

    :deep(main) {
      flex-grow: 1;
    }

    :deep(footer) {
      flex-shrink: 0;
    }
  }
}
</style>