<template>
  <tfoot class="table__footer">
  <tr>
    <td colspan="2">
    </td>
    <td class="align-center">
      {{total}}
    </td>
    <td class="align-center">
      Итог
    </td>
  </tr>
  </tfoot>
</template>

<script>
  export default {
    props: ['newProductsData'],
    computed: {
      total() {
        let total = 0;

        this.newProductsData.forEach((product) => {
          const amount = product['Количество'] || 0;
          const price = product['Цена'] || 0;
          total += parseFloat(amount) * parseFloat(price);
        });

        total = (total.toFixed(2)).toString();
        return total;
      },
    },
  };
</script>

<style scoped>
  .table__footer {
    background-color: #009688;
    color: #fff;
  }
  .align-right {
    text-align: right;
  }
  .align-center {
    text-align: center;
  }
</style>
