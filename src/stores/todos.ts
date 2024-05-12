import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { ITodo } from '@/interfaces/todo'
import { getAllTodos } from '@/api/todos'
import { v4 as uuidv4 } from 'uuid'
import { message } from 'ant-design-vue'

export const useTodosStore = defineStore('todos', () => {
  const todos = ref<ITodo[]>([])
  const filter = ref<string>('all')
  const searchQuery = ref<string>('')

  const loadTodos = async () => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      todos.value = JSON.parse(savedTodos)
    } else {
      // Если в локальном хранилище нет задач, запрашиваем их из API
      await getTodos()
    }
  }

  const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos.value))
  }

  const getTodos = async () => {
    try {
      const res = await getAllTodos()
      todos.value = res.data
      saveTodos()
    } catch (error: unknown) {
      if (error instanceof Error) {
        message.error(error.message)
      }
    }
  }

  const addTodo = (title: string) => {
    todos.value.push({
      id: uuidv4(),
      title: title,
      completed: false
    })
    saveTodos()
  }

  const removeTodo = (id: string | number) => {
    todos.value = todos.value.filter((todo) => todo.id !== id)
    saveTodos()
  }

  const removeAllTodos = () => {
    todos.value = [];
    saveTodos();
  };

  const completeTodo = (id: string | number) => {
    const todo = todos.value.find((todo) => todo.id === id)
    if (todo) {
      todo.completed = !todo.completed
    }
    saveTodos()
  }

  const completedTodos = computed(() => todos.value.filter((todo) => todo.completed))

  const uncompletedTodos = computed(() => todos.value.filter((todo) => !todo.completed))

  const filteredTodos = computed(() => {
    // Фильтрация по поисковому запросу
    const filtered = searchQuery.value.trim() !== ''
      ? todos.value.filter((todo) => todo.title.toLowerCase().includes(searchQuery.value.trim().toLowerCase()))
      : todos.value

    // Фильтрация по статусу задачи
    switch (filter.value) {
      case 'completed':
        return filtered.filter((todo) => todo.completed)
      case 'uncompleted':
        return filtered.filter((todo) => !todo.completed)
      default:
        return filtered
    }
  })

  return {
    todos,
    completedTodos,
    uncompletedTodos,
    searchQuery,
    filter,
    filteredTodos,
    loadTodos,
    addTodo,
    removeTodo,
    removeAllTodos,
    completeTodo,
  }
})
