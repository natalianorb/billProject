<template>
  <tbody>
  <tr v-for="(product, index) in newProductsData"
      :key="product.id">
    <td v-for="(property, i) in tableProps"
        :key="i">
      <app-input :name="property.name"
                 :type="property.type"
                 v-model="product[property.name]"/>
    </td>
    <td class="align-center">
      <input type="button" value="Remove item" @click="deleteRow(index)" class="button__delete-row"/>
    </td>
  </tr>
  <tr>
    <td :colspan="tableProps.length + 1">
      <input type="button" @click="addRow" value="Add item" class="button__add-row"/>
    </td>
  </tr>
  </tbody>
</template>

<script>
  import { mapState } from 'vuex';
  import appInput from './AppInput';

  export default {
    components: {
      'app-input': appInput,
    },
    computed: mapState([
      'tableProps',
      'newProductsData',
    ]),
    methods: {
      addRow() {
        this.$store.commit('addProduct');
      },
      deleteRow(index) {
        this.$store.commit('deleteProduct', index);
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
