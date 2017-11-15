<template>
  <form action="">
    <table id="BillTable">
      <TableHeader :columns="tableData[0]"/>
      <TableBody :tableData="tableData"/>
      <TableFooter :tableData="tableData"/>
    </table>
  </form>
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

<style>
  #BillTable {
    border-collapse: collapse;
  }
  #BillTable * {
    box-sizing: border-box;
  }
  #BillTable th,
  #BillTable td {
    height: 2.5rem;
    padding: 0;
  }
  #BillTable input[type="button"] {
    width: 125px;
  }
</style>
