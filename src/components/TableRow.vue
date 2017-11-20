<template>
  <tr @input="passValue">
    <td v-for="(cell, index) in rowStructure"
        :key="index">
      <app-input :name="cell.name"
                 :type="cell.type"
                 v-model="productProperties[cell.name]"/>
    </td>
    <td>
      <input type="button" value="Удалить строку" @click="passDeleteEvent" class="button__delete-row"/>
    </td>
  </tr>
</template>

<script>
  import appInput from './AppInput';

  export default {
    props: ['rowStructure'],
    components: {
      'app-input': appInput,
    },
    data() {
      const productProperties = {};

      this.rowStructure.forEach((productProperty) => {
        productProperties[productProperty.name] = null;
      });
      return {
        productProperties,
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
  .button__delete-row {
    padding: 5px 10px;
    background-color: #ef5350;
    line-height: 1.4rem;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
    transition: background-color .3s ease-out;
    outline: none;
  }
  .button__delete-row:hover {
    background-color: #e53935;
  }
</style>
