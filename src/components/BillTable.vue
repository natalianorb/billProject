<template>
  <table id="BillTable">
    <TableHeader :columns="columns"/>
    <TableBody :columns="columns"/>
    <TableFooter :columns="columns"/>
  </table>
</template>

<script>
  import TableHeader from './TableHeader';
  import TableBody from './TableBody';
  import TableFooter from './TableFooter';

  const columns = [
    'Наименование',
    'Количество',
    'Цена',
  ];

  export default {
    components: {
      TableHeader,
      TableBody,
      TableFooter,
    },
    data() {
      /* additional column for buttons on the right side of the table */
      columns.push('');
      return {
        columns,
      };
    },
  };
</script>

<style scoped>
</style>
