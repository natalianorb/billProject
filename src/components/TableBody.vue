<template>
  <tbody>
    <table-row v-for="(rowData, index) in tableData"
               :rowData="rowData"
               :key="index"/>
  </tbody>
</template>

<script>
  import tableRow from './TableRow';

  export default {
    props: ['tableData'],
    components: {
      'table-row': tableRow,
    },
    data() {
      return {
      };
    },
    methods: {
      removeRow() {

      },
      updateValue() {
      },
    },
  };
</script>

<style scoped>
</style>
