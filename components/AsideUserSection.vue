<script setup lang="ts">
import { useYandexMusicStore } from '~/stores/accountStore/accountStore';

const store = useYandexMusicStore()
const isTooltipVisible = ref(false);

console.log("AsideUserSection", store.initialData);

const toggleTooltip = () => {
  isTooltipVisible.value = !isTooltipVisible.value
}

const hasPlus = () => {
  if (store.initialData?.value?.result?.plus.hasPlus) {
    return 'You are in Plus!'
  }

  return 'Sorry, you don\'t have plus :(';
}
</script>

<template>
  <div class="user-container">
    <section class="user" @click="toggleTooltip">
      <img class="user__image" src="../assets/svg/Logo.svg">

      <div class="user-info">
        <div class="user-info-fullname">
          <span class="user-info-fullname__firstname">
            {{ store.initialData?.value?.result?.account?.firstName }}
          </span>
          {{ }}
          <span class="user-info-fullname__secondname">
            {{ store.initialData?.value?.result?.account?.secondName }}
          </span>
        </div>
        <span class="user-info__email">
          {{ store.initialData?.value?.result?.defaultEmail }}
        </span>
      </div>
    </section>

    <div v-if="isTooltipVisible" class="tooltip">
      <ul>
        <li class="tooltip-info">
          <span class="tooltip-info__property">Login: </span>
          <span class="tooltip-info__value">
            <pre>{{ store.initialData?.value?.result?.account?.displayName }}</pre>
          </span>
        </li>
        <li class="tooltip-info">
          <span class="tooltip-info__property">Phone: </span>
          <span class="tooltip-info__value">
            {{ store.initialData?.value?.result?.account?.["passport-phones"][0].phone }}
          </span>
        </li>
        <li class="tooltip-info">
          <span class="tooltip-info__property">Plus: </span>
          <span class="tooltip-info__value">
            {{ hasPlus() }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/abstracts" as *;
@use "../assets/scss/mixins" as *;

.user-container {
  position: relative;
}

.user {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  
  padding: 10px 20px;
  height: 70px;
  
  @include shadows;
  border: 1px solid var(--border-color);
  border-radius: $border-radius-md;
  user-select: none;
  font-family: $font-family-info;
  letter-spacing: 0.5px;

  .user__image {
    width: 45px;
    border: 1px solid var(--text-color-muted);
    border-radius: $border-radius-circle;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    line-height: 25px;
    font-weight: $font-weight-semibold;
    font-size: $font-size-md;

    .user-info__email {
      color: var(--text-color-secondary)
    }
  }
}


.tooltip {
  position: absolute;
  top: -10px;
  left: 50%;
  padding: 10px;

  width: 300px;

  z-index: 1000;
  transform: translateX(-50%) translateY(-100%);

  background-color: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: $border-radius-md;
  box-shadow: 0 2px 10px var(--border-color);
  font-family: $font-family-info;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;

    transform: translateX(-50%);

    border-width: 10px 10px 0;
    border-style: solid;
    border-color: var(--border-color) transparent transparent transparent;
  }

  .tooltip-info__property {
    margin: 0 0 5px;
    font-weight: $font-weight-semibold;
  }

  .tooltip-info__value > pre {
      display: inline;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 5px;
  }
}
</style>