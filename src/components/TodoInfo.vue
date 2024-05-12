<script setup lang="ts">
import { useTodosStore } from '@/stores/todos'
import { storeToRefs } from 'pinia'

const store = useTodosStore()
const { removeAllTodos } = store
const { todos, completedTodos, uncompletedTodos } = storeToRefs(store)
</script>

<template>
  <div v-if="todos.length" class="info">
    <div class="info-items">
      <ATypographyText type="secondary">All: {{ todos.length }}</ATypographyText>
      <ATypographyText type="secondary">Completed: {{ completedTodos.length }}</ATypographyText>
      <ATypographyText type="secondary">Uncompleted: {{ uncompletedTodos.length }}</ATypographyText>
    </div>
    <AButton type="text" size="small" @click="removeAllTodos">Remove all</AButton>
  </div>
</template>

<style scoped>
.info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.info-items {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>