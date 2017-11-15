<template>
  <tr @input="passValue">
    <td v-for="(cell, index) in rowData"
        :key="index">
      <app-input :attributes="cell"
                 v-model="productProperties[index]"/>
    </td>
    <td>
      <input type="button" value="Удалить строку" @click="passDeleteEvent"/>
    </td>
  </tr>
</template>

<script>
  import appInput from './AppInput';

  export default {
    props: ['rowData'],
    components: {
      'app-input': appInput,
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
