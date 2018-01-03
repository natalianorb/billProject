import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tableProps: [
      {
        name: 'Item',
        type: 'text',
      },
      {
        name: 'Quantity',
        type: 'number',
      },
      {
        name: 'Price',
        type: 'text',
      },
    ],
    newProductsData: [],
  },
  mutations: {
    addProduct(state) {
      const product = {
        Наименование: '',
        Количество: '',
        Цена: '',
      };
      product.id = Math.random().toString(36).substr(2, 9);
      state.newProductsData.push(product);
    },
    deleteProduct(state, index) {
      state.newProductsData.splice(index, 1);
    },
  },
});
