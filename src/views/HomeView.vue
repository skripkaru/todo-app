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
  <div class="wrapper">
    <ATypographyTitle class="title">Todo App</ATypographyTitle>
    <div class="grid">
      <TodoForm />
      <TodoFilter/>
      <TodoList :todos="filteredTodos" />
      <TodoInfo/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  max-width: 500px;
  padding: 0 16px;
  margin: 40px auto;
}

.grid {
  display: grid;
  gap: 16px;
}

.title {
  margin-top: 0;
  text-align: center;
}
</style>