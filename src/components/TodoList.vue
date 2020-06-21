<template>
  <b-overlay :show.sync="loading" style="min-height: 80px;">
    <b-alert v-if="error">{{ error.message}}</b-alert>
    <TodoItem v-for="item in filteredTodos" :key="item.id" :item="item"/>
  </b-overlay>
</template>
<script>
  import TodoItem from "@/components/TodoItem"
  import useTodos from "@/composition/todos";
  import {onMounted} from "@vue/composition-api";

  export default {
    name: 'TodoList',
    components: {TodoItem},
    setup() {
      const {todos, filteredTodos, listTodos} = useTodos()
      const {loading, error, exec} = listTodos()

      onMounted(() => {
        exec()
      })

      return {
        filteredTodos,
        todos,
        loading,
        error,
      }
    }
  }
</script>