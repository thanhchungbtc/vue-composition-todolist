<template>
  <b-container>
    <b-row class="mt-5">
      <b-col cols="12">
        <FilteredButton/>
        <h3 class="mb-3 font-weight-bold">Todos</h3>
        <hr/>
        <TodoItem v-for="item in items" :key="item.id" :item="item"/>
        <CreateTodo :create-todo="createTodo" :title="title"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import {reactive, toRefs} from "@vue/composition-api";
  import TodoItem from "@/views/TodoItem";
  import FilteredButton from "@/views/FilteredButton";
  import CreateTodo from "@/views/CreateTodo";

  function useTodos() {
    const state = reactive({
      items: [
        {id: 1, title: "Hello World", completed: false},
        {id: 2, title: "Hello World", completed: false}
      ],
      title: "",
      createTodo: () => {
        state.items.push({
          id: state.items.length + 1,
          title: state.title,
          completed: false
        });
        state.title = "";
      }
    });
    return toRefs(state);
  }

  export default {
    components: {CreateTodo, FilteredButton, TodoItem},
    setup() {
      const {items, title, createTodo} = useTodos();

      return {
        items,
        title,
        createTodo
      };
    }
  };
</script>
