import axios from 'axios'

export const getAllTodos = () => axios.get(`${import.meta.env.VITE_API_URL}/todos?_limit=5`)