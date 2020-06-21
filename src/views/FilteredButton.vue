<template>
  <div class="d-flex justify-content-center mb-3">
    <b-button-group>
      <b-button variant="secondary">All</b-button>
      <b-button variant="light">Completed</b-button>
      <b-button variant="light">Uncompleted</b-button>
    </b-button-group>
  </div>
</template>
<script>
  export default {
    name: 'FilteredButton'
  }
</script>
