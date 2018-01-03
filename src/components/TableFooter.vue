<template>
  <tfoot>
  <tr>
    <td>
    </td>
    <td>
    </td>
    <td class="align-center">
      {{total}}
    </td>
    <td class="align-center">
      Total
    </td>
  </tr>
  </tfoot>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    computed: mapState({
      newProductsData: 'newProductsData',
      total() {
        let total = 0;

        this.newProductsData.forEach((product) => {
          const amount = product.Quantity || 0;
          const price = product.Price || 0;
          total += Number.parseFloat(amount) * Number.parseFloat(price);
        });

        total = (total.toFixed(2)).toString();
        return total;
      },
    }),
  };
</script>

<style scoped>
</style>
