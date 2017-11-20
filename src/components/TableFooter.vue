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
    data() {
      let total = 0;

      this.newProductsData.forEach((product) => {
        const amount = product['Количество'];
        const price = product['Цена'];
        total += parseFloat(amount) * parseFloat(price);
      });

      total = total.toString();
      total = (total === 'NaN') ? 0 : total;
      return {
        total,
      };
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
