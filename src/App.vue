<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <ALayout>
    <ALayoutContent class="content">
      <RouterView />
    </ALayoutContent>
  </ALayout>
</template>

<style scoped>
.content {
  height: 100dvh;
  padding: 16px;
}
</style>
