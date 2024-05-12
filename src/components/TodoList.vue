<script setup lang="ts">
import { useTodosStore } from '@/stores/todos'
import { DeleteOutlined } from '@ant-design/icons-vue'

defineProps(['todos'])

const store = useTodosStore()
const { completeTodo, removeTodo } = store
</script>

<template>
  <AList bordered :data-source="todos">
    <template #renderItem="{ item }">
      <AListItem>
        <ACheckbox :checked="item.completed" @change="completeTodo(item.id)">
          {{ item.title }}
        </ACheckbox>
        <AButton type="ghost" @click="removeTodo(item.id)">
          <DeleteOutlined/>
        </AButton>
      </AListItem>
    </template>
  </AList>
</template>

<style scoped>

</style>