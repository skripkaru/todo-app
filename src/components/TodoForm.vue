<script setup lang="ts">
import { ref } from 'vue'
import {message} from 'ant-design-vue';
import { useTodosStore } from '@/stores/todos'

const { addTodo } = useTodosStore()

const title = ref<string>('')

const createTodo = () => {
  if(!title.value) {
    message.error('Please enter a todo title')
    return
  }
  addTodo(title.value)
  title.value = ''
}
</script>

<template>
  <AForm @submit="createTodo">
    <AInput placeholder="Enter todo" v-model:value="title"/>
  </AForm>
</template>

<style scoped>

</style>