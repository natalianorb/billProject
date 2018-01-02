import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newProduct() {
      const product = {};
      this.tableProps.forEach((columnProp) => {
        product[columnProp.name] = null;
      });
      product.id = Math.random().toString(36).substr(2, 9);
      return product;
    },
    newProductsData: [],
  },
  mutations: {
    addProduct(state) {
      state.newProductsData.push(state.newProduct());
    },
  },
});
