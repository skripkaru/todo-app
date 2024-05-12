<script setup lang="ts">
import { RouterView } from 'vue-router'
import type { CSSProperties } from 'vue'

const contentStyle: CSSProperties = {
  minHeight: '100vh',
  backgroundColor: '#fff',
};
</script>

<template>
  <ALayout>
    <ALayoutContent :style="contentStyle">
      <RouterView />
    </ALayoutContent>
  </ALayout>
</template>

<style scoped></style>
