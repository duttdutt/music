<script setup lang="ts"></script>

<template>
  <div class="layout">
    <aside>
      <AsideLogo />
      <AsideNav />
      <AsideUser />
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
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-height: 100vh;
  gap: 10px;

  @media (min-width: 801px) {
    flex-direction: row;
  }

  aside {
    display: flex;
    flex-direction: column;
    gap: 10px;

    width: 350px;

    @media (max-width: 801px) {
      width: 100%;
    }

    @media (max-width: 800px) {
      .nav-section,
      .user-section {
        display: none;
      }
    }
  }

  .content {
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    gap: 10px;

    main {
      flex-grow: 1;
    }

    footer {
      flex-shrink: 0;
    }
  }
}
</style>
