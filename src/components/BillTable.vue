<template>
  <form action="">
    <table id="BillTable">
      <TableHeader :columnTitles="tableProps"/>
      <TableBody :tableProps="tableProps" v-model="newProductsData"/>
      <TableFooter :newProductsData="newProductsData"/>
    </table>
  </form>
</template>

<script>
  import TableHeader from './TableHeader';
  import TableBody from './TableBody';
  import TableFooter from './TableFooter';

  const tableProps = [
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
  ];

  export default {
    components: {
      TableHeader,
      TableBody,
      TableFooter,
    },
    data() {
      return {
        tableProps,
        newProductsData: [],
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
  #BillTable tbody tr:last-child {
    text-align: center;
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
