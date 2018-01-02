<template>
  <div id="app">
    <form action="">
      <table id="PackingList">
        <TableHeader :columnTitles="tableProps"/>
        <TableBody :tableProps="tableProps" v-model="newProductsData"/>
        <TableFooter :newProductsData="newProductsData"/>
      </table>
    </form>
  </div>
</template>

<script>
  import TableHeader from './components/TableHeader';
  import TableBody from './components/TableBody';
  import TableFooter from './components/TableFooter';

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
    name: 'app',
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
  html {
    font-size: 15px;
    font-family: "Roboto", sans-serif;
    font-weight: normal;
  }
  input {
    padding: 0;
    background-color: transparent;
    outline: none;
    text-align: center;
  }
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #PackingList {
    border-collapse: collapse;
  }
  #PackingList * {
    box-sizing: border-box;
  }
  #PackingList tbody tr:last-child {
    text-align: center;
  }
  #PackingList th,
  #PackingList td {
    height: 2.5rem;
    padding: 0;
  }
  #PackingList input[type="button"] {
    width: 125px;
  }
</style>
