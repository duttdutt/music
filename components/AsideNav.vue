<script lang="ts"></script>

<template>
  <nav class="nav">
    <div class="nav__wrapper">
      <div class="nav-card">
        <div class="nav-card__heading">
          Test
        </div>
      </div>
    </div>
    <div class="nav__wrapper">
      <div class="nav-card">
        <div class="nav-card__heading">
          Test
        </div>
      </div>
    </div>
    <div class="nav__wrapper">
      <div class="nav-card">
        <div class="nav-card__heading">
          Test
        </div>
      </div>
    </div>
    <div class="nav__wrapper">
      <div class="nav-card">
        <div class="nav-card__heading">
          Test
        </div>
      </div>
    </div>
    <div class="nav__wrapper">
      <div class="nav-card">
        <div class="nav-card__heading">
          Test
        </div>
      </div>
    </div>
    <div class="nav__wrapper">
      <div class="nav-card">
        <div class="nav-card__heading">
          Test
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use "../assets/scss/abstracts" as *;
@use "../assets/scss/mixins" as *;

.nav {
  flex-grow: 1;

  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 10px;

  padding: 20px;

  @include shadows;
  border: 1px solid var(--border-color);
  border-radius: $border-radius-md;

  &__wrapper {
    width: 150px;
    height: 170px;

    @media (max-width: 801px) {
      width: 100%;
    }
  }
}

.nav-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 100%;
  height: 100%;

  transition: all 0.3s ease;

  border: 1px solid var(--border-color);
  border-radius: $border-radius-lg;
  background-color: var(--border-color);

  &:hover,
  &:hover > * {
    transform: translateY(-5px);
    transition: all 0.3s ease;

    background-color: var(--background-color-secondary);
    border-color: var(--border-color);
    cursor: pointer;
  }

  &__heading {
    transition: all 0.3s ease;

    background-color: var(--border-color);
    font-size: $font-size-md;
    font-weight: $font-weight-bold;

    @media (max-width: 801px) {
      font-size: $font-size-xl;
    }
  }
}
</style>

