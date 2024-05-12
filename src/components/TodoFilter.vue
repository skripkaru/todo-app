<script setup lang="ts">
import { useTodosStore } from '@/stores/todos'
import { storeToRefs } from 'pinia'

const store = useTodosStore()
const { todos, filter, searchQuery } = storeToRefs(store)
</script>

<template>
  <div v-if="todos.length" class="filter">
    <AInput v-model:value="searchQuery" placeholder="Search todo" />
    <ASelect v-model:value="filter">
      <ASelectOption value="all">All</ASelectOption>
      <ASelectOption value="completed">Completed</ASelectOption>
      <ASelectOption value="uncompleted">Uncompleted</ASelectOption>
    </ASelect>
  </div>
</template>

<style scoped>
.filter {
  display: grid;
  grid-template-columns: 1fr 130px;
  gap: 8px;
}
</style>