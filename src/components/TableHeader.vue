<template>
  <thead class="">
    <tr>
      <th v-for="col in columns">
        {{col.name}}
      </th>
      <th>

      </th>
    </tr>
  </thead>
</template>

<script>
  export default {
    props: ['columns'],
  };
</script>

<style scoped>
</style>
