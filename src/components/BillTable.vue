<template>
  <table id="BillTable">
    <TableHeader :columns="columns"/>
    <TableBody :columns="columns"/>
    <TableFooter :columns="columns"/>
  </table>
</template>

<script>
  import TableHeader from './TableHeader';
  import TableBody from './TableBody';
  import TableFooter from './TableFooter';

  const columns = [
    {
      title: 'Наименование',
      type: 'text',
    },
    {
      title: 'Количество',
      type: 'count',
    },
    {
      title: 'Цена',
      type: 'monetary',
    },
  ];

  export default {
    components: {
      TableHeader,
      TableBody,
      TableFooter,
    },
    data() {
      return {
        columns,
      };
    },
  };
</script>

<style scoped>
</style>
