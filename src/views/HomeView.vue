<script setup lang="ts">
import { onMounted } from 'vue'
import { useTodosStore } from '@/stores/todos'
import { storeToRefs } from 'pinia'
import TodoForm from '@/components/TodoForm.vue'
import TodoFilter from '@/components/TodoFilter.vue'
import TodoList from '@/components/TodoList.vue'
import TodoInfo from '@/components/TodoInfo.vue'

const store = useTodosStore()
const { loadTodos } = store
const { filteredTodos } = storeToRefs(store)

onMounted(() => {
  loadTodos()
})
</script>

<template>
  <ACard class="wrapper">
    <div class="inner">
      <ATypographyTitle class="title">Todo App</ATypographyTitle>
      <TodoForm />
      <TodoFilter />
      <TodoList :todos="filteredTodos" />
      <TodoInfo />
    </div>
  </ACard>
</template>

<style scoped>
.wrapper {
  width: 100%;
  max-width: 400px;
  margin: 16px auto;
}

.inner {
  display: grid;
  gap: 16px;
}

.title {
  margin: 0;
  text-align: center;
}
</style>