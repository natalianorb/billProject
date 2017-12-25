<template>
  <div id="app">
    <BillTable/>
  </div>
</template>

<script>
  import BillTable from './components/BillTable';

  export default {
    name: 'app',
    components: {
      BillTable,
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
</style>
