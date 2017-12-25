<template>
  <tbody @input="updateValue">
  <tr v-for="(product, index) in products"
      :key="product.id">
    <td v-for="(property, i) in tableProps"
        :key="i">
      <app-input :name="property.name"
                 :type="property.type"
                 v-model="product[property.name]"/>
    </td>
    <td>
      <input type="button" value="Удалить строку" @click="deleteRow(index)" class="button__delete-row"/>
    </td>
  </tr>
  <tr>
    <td :colspan="tableProps.length + 1">
      <input type="button" @click="addRow" value="Добавить строку" class="button__add-row"/>
    </td>
  </tr>
  </tbody>
</template>

<script>
  import appInput from './AppInput';

  export default {
    props: ['tableProps'],
    components: {
      'app-input': appInput,
    },
    data() {
      const products = [];
      products.push(Object.assign({}, this.newProduct()));
      return {
        products,
      };
    },
    methods: {
      addRow() {
        this.products.push(Object.assign({}, this.newProduct()));
      },
      deleteRow(index) {
        this.products.splice(index, 1);
      },
      newProduct() {
        const product = {};
        this.tableProps.forEach((columnProp) => {
          product[columnProp.name] = null;
        });
        product.id = Math.random().toString(36).substr(2, 9);
        return product;
      },
      updateValue() {
        this.$emit('input', this.products);
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
