<template>
  <div class="d-flex align-items-center">
    <div class="icon">
      <b-icon-plus-circle scale="1.6"/>
    </div>
    <b-overlay :show.sync="loading" class="ml-3 border-bottom py-2 flex-1">
      <input
          type="text"
          class="flat"
          v-model="title"
          placeholder="What needs to be done?"
          @keyup.enter="createTodo"
      />
      <b-alert v-if="error">{{ error.message }}</b-alert>
    </b-overlay>
  </div>
</template>
<script>
  import {ref} from "@vue/composition-api";
  import useTodos from "@/composition/todos";

  export default {
    name: 'CreateTodo',
    setup() {
      const {createTodo: _createTodo} = useTodos()
      const title = ref("")
      const {loading, error, exec} = _createTodo()

      const createTodo = () => {
        if (!title.value.trim()) {
          return
        }
        exec(title.value)
          .then(() => {
            title.value = ""
          })
      }

      return {
        title,
        createTodo,
        loading,
        error,
      }
    }
  }
</script>
