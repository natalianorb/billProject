<template>
  <thead class="table__head">
    <tr>
      <th v-for="col in columns" class="table__th">
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
  .table__head {
  }
  .table__th {
    min-width: 170px;
    height: 2rem;
  }
</style>
