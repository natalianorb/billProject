<template>
  <tfoot class="table__footer">
  <tr>
    <td v-for="(cell, index) in tableData[0]"
        :key="index">
    </td>
    <td>
      Итог
    </td>
  </tr>
  </tfoot>
</template>

<script>
  export default {
    props: ['tableData'],
  };
</script>

<style scoped>
  .table__footer {
    background-color: #009688;
    color: #fff;
  }
</style>
