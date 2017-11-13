<template>
  <tr>
    <td v-for="(cell, index) in rowData"
        :key="index">
      <app-input :attributes="cell"
                 v-model="productData[index]"/>
    </td>
    <td>
      <delete-row v-on:click="passDeleteEvent"/>
    </td>
  </tr>
</template>

<script>
  import appInput from './AppInput';
  import deleteRow from './buttons/DeleteRow';

  export default {
    props: ['rowData'],
    components: {
      'app-input': appInput,
      'delete-row': deleteRow,
    },
    data() {
      return {
        productData: Object.assign([], this.rowData),
      };
    },
    methods: {
      passDeleteEvent() {
      },
    },
  };
</script>

<style scoped>
</style>
