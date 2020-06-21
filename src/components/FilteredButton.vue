<template>
  <div class="d-flex justify-content-center mb-3">
    <b-button-group>
      <b-button
          :variant="visibilityFilter === filter.value ? 'success' : 'light'"
          :key="filter.value"
          @click="setVisibilityFilter(filter.value)"
          v-for="filter in filters"
      >{{ filter.name }}
      </b-button>
    </b-button-group>
  </div>
</template>
<script>
  import useTodos, {VisibilityFilter} from "@/composition/todos";

  export default {
    name: 'FilteredButton',

    setup() {
      const {visibilityFilter, setVisibilityFilter} = useTodos()
      const filters = Object.keys(VisibilityFilter).map(i => ({
        name: VisibilityFilter[i].name,
        value: VisibilityFilter[i].value,
      }))

      return {
        visibilityFilter,
        setVisibilityFilter,
        filters
      }
    }
  }
</script>
