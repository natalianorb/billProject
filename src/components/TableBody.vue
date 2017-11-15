<template>
  <tbody>
    <table-row v-for="(product, index) in products"
               :key="index"
               :rowData="product"
               v-model="products[index]"
                @deleteRow="deleteRow(index)"/>
  <tr>
    <td>
      <input type="button" @click="addRow" value="Добавить строку"/>
    </td>
  </tr>
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
      addRow() {
        this.products.push(this.tableData[0]);
      },
      deleteRow(index) {
        this.products.splice(index, 1);
      },
      updateValue() {
      },
    },
  };
</script>

<style scoped>
</style>
