<template>
  <table id="BillTable">
    <TableHeader :columns="tableData[0]"/>
    <TableBody :tableData="tableData"/>
    <TableFooter :tableData="tableData"/>
  </table>
</template>

<script>
  import TableHeader from './TableHeader';
  import TableBody from './TableBody';
  import TableFooter from './TableFooter';

  const tableData = [
    [
      {
        name: 'Наименование',
        type: 'text',
      },
      {
        name: 'Количество',
        type: 'number',
      },
      {
        name: 'Цена',
        type: 'text',
      },
    ],
  ];

  export default {
    components: {
      TableHeader,
      TableBody,
      TableFooter,
    },
    data() {
      return {
        tableData,
      };
    },
  };
</script>

<style scoped>
</style>
