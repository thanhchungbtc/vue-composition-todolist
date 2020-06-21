<template>
  <div class="d-flex align-items-center">
    <div class="icon round">
      <input type="checkbox" :id="`checkbox_${item.id}`"/>
      <label :for="`checkbox_${item.id}`"></label>
    </div>
    <div class="ml-3 border-bottom py-2 flex-1">
      <input v-model="item.title" class="flat" type="text"/>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'TodoItem',
    props: {
      item: {}
    }
  }
</script>
