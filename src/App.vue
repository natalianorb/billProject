<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Table/>
  </div>
</template>

<script>
import Table from './components/Table';

export default {
  name: 'app',
  components: {
    Table,
  },
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
