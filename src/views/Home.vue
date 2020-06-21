<template>
  <b-container :fluid="true">
    <b-row class="mt-5">
      <b-col cols="12" md="6" offset-md="3">
        <FilteredButton/>
        <div class="mb-3 d-flex flex-column">
          <h3 class="mb-3 font-weight-bold">Todos</h3>
          <div class="d-flex justify-content-between align-items-center">
            <b-progress class="flex-1" variant="success" height="8px" :max="total" :value="totalCompleted"/>
          </div>
        </div>
        <TodoList/>
        <CreateTodo/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import FilteredButton from "@/components/FilteredButton";
  import CreateTodo from "@/components/CreateTodo";
  import TodoList from "@/components/TodoList";
  import useTodos from "@/composition/todos";
  import {computed} from "@vue/composition-api";

  export default {
    components: {TodoList, CreateTodo, FilteredButton},
    setup() {
      const {todos} = useTodos()
      const totalCompleted = computed(() => todos.value.filter(t => t.completed).length)
      const total = computed(() => todos.value.length)

      return {
        total,
        totalCompleted
      }
    }
  };
</script>
