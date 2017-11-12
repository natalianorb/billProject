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
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
