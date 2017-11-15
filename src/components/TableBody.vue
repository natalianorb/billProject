<template>
  <tbody>
    <table-row v-for="(product, index) in products"
               :key="index"
               :rowData="product"
               v-model="products[index]"
                @deleteRow="deleteRow(index)"/>
  <tr>
    <td :colspan="products && products[0]? products[0].length + 1 : false" class="right-align">
      <input type="button" @click="addRow" value="Добавить строку" class="button__add-row"/>
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
  .button__add-row {
    padding: 5px 10px;
    background-color: #009688;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
    transition: background-color .3s ease-out;
    line-height: 1.4rem;
  }
  .button__add-row:hover {
    background-color: #00897b;
  }
  .right-align {
    text-align: right;
  }
</style>
