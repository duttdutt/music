<script setup lang="ts">
import { ref } from 'vue'

const test = ref("")

function handleClick() {
  alert('test')
}
</script>

<template>
  <div>
    <button @click="handleClick">click</button>
  </div>
</template>

<style lang="scss" module></style>
