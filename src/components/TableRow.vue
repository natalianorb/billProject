<template>
  <tr>
    <td v-for="(cell, index) in rowData"
        :key="index">
      <app-input :name="cell.name"
                 :type="cell.type"
                 :index="index"
                 @update="updateValue"/>
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
        productData: Object.assign({}, this.rowData),
      };
    },
    methods: {
      passDeleteEvent() {
      },
      updateValue(data, index) {
        this.$set(this.productData, index, data);
      },
    },
  };
</script>

<style scoped>
</style>
