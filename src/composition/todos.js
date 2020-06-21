import Vue from 'vue'
import VueCompositionAPI, {computed} from '@vue/composition-api'
import {ref} from "@vue/composition-api";
import usePromise from "./usePromise";
import {todosAPI} from "../api";

Vue.use(VueCompositionAPI)

export const VisibilityFilter = {
  ALL: {name: 'All', value: 0},
  COMPLETED: {name: 'Completed', value: 1},
  UNCOMPLETED: {name: 'Uncompleted', value: 2},
}

const todos = ref([])
const visibilityFilter = ref(0)

const listTodos = () => {
  const {loading, error, use: exec} = usePromise(() => {
    return todosAPI
      .list()
      .then(result => {
        todos.value = result
      })
  })
  return {
    loading, error, exec,
  }
}

const createTodo = () => {
  const {loading, error, use: exec} = usePromise((title) => {
    return todosAPI
      .create(title.trim())
      .then(result => {
        todos.value.push(result)
      })
  })
  return {
    loading, error, exec,
  }
}

const updateTodo = () => {
  const {loading, error, use: exec} = usePromise((todo) => {
    return todosAPI
      .update(todo)
      .then(todo => {
        const foundIdx = todos.value.findIndex(s => s.id === todo.id)
        todos.value.splice(foundIdx, 1, todo)
      })
  })
  return {
    loading, error, exec,
  }
}

const setVisibilityFilter = (target) => {
  visibilityFilter.value = target
}

export default function useTodos() {
  const filteredTodos = computed(() => {
    switch (visibilityFilter.value) {
      case VisibilityFilter.ALL.value:
        return todos.value
      case VisibilityFilter.COMPLETED.value:
        return todos.value.filter(i => i.completed)
      case VisibilityFilter.UNCOMPLETED.value:
        return todos.value.filter(i => !i.completed)
      default:
        return todos.value
    }
  })

  return {
    todos,
    filteredTodos,
    visibilityFilter,
    listTodos,
    createTodo,
    updateTodo,
    setVisibilityFilter
  }
}