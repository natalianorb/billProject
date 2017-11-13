<template>
  <tbody>
    <table-row v-for="(rowData, index) in tableData"
               :key="index"
               :rowData="rowData"
               v-model="products[index]"
                @deleteRow="deleteRow(index)"/>
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
        products: Object.assign([], this.tableData),
      };
    },
    methods: {
      deleteRow() {

      },
      updateValue() {
      },
    },
  };
</script>

<style scoped>
</style>
