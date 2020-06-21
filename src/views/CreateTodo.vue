<template>
  <div class="d-flex align-items-center">
    <div class="icon">
      <b-icon-plus/>
    </div>
    <div class="ml-3 border-bottom py-2 flex-1">
      <input
          type="text"
          class="flat"
          @keyup.enter="createTodo"
          v-model="title"
          placeholder="What needs to be done?"
      />
    </div>
  </div>
</template>
<script>
  export default {
    name: 'CreateTodo',
    props: {
      createTodo: {},
      title: {}
    }
  }
</script>
