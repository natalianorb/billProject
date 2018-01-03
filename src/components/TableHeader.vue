<template>
  <thead>
    <tr>
      <th v-for="col in tableProps">
        {{col.name}}
      </th>
      <th>
      </th>
    </tr>
  </thead>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    computed: mapState([
      'tableProps',
    ]),
  };
</script>

<style scoped>
</style>
s