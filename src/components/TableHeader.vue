<template>
  <thead class="">
    <tr>
      <th v-for="col in columns">
        {{col}}
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
