<template>
  <div class="d-flex align-items-center">
    <div class="icon round">
      <input type="checkbox" @change="commit" v-model="completed" :id="`checkbox_${item.id}`"/>
      <label :for="`checkbox_${item.id}`"></label>
    </div>
    <div class="ml-3 border-bottom py-2 flex-1">
      <input @blur="commit" v-model="title" class="flat" :class="{'is-completed': completed}" type="text"/>
      <b-alert v-if="error" variant="danger">{{ error.message }}</b-alert>
    </div>
  </div>
</template>
<script>
  import {reactive, ref, toRefs, watch} from '@vue/composition-api'
  import useTodos from "@/composition/todos";

  export default {
    name: 'TodoItem',
    props: ['item'],
    setup({item}) {
      const {updateTodo} = useTodos()
      const {loading, error, exec} = updateTodo()
      const state = reactive({
        title: "",
        completed: false,
      })
      const dirty = ref(false)

      watch(() => item, (newVal) => {
        state.title = newVal.title
        state.completed = newVal.completed
        dirty.value = false
      }, {deep: true, immediate: true})

      watch(() => state, () => {
        dirty.value = true
      }, {deep: true, immediate: true})

      const commit = () => {
        if (!dirty.value) {
          return
        }

        exec({
          ...item,
          title: state.title,
          completed: state.completed
        })
      }

      return {
        ...toRefs(state),
        updateTodo,
        loading,
        error,
        commit,
      }
    }
  }
</script>
