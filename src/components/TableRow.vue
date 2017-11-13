<template>
  <tr @input="passValue">
    <td v-for="(cell, index) in rowData"
        :key="index">
      <app-input :attributes="cell"
                 v-model="productProperties[index]"/>
    </td>
    <td>
      <delete-row @click="passDeleteEvent"/>
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
        productProperties: Object.assign([], this.rowData),
      };
    },
    methods: {
      passValue() {
        this.$emit('input', this.productProperties);
      },
      passDeleteEvent() {
        this.$emit('deleteRow');
      },
    },
  };
</script>

<style scoped>
</style>
