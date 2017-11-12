<template>
  <tbody>
  <tr>
    <td v-for="col in columns">
      <app-input :name="col.title" :type="col.type"/>
    </td>
    <td>

    </td>
  </tr>
  </tbody>
</template>

<script>
  import appInput from './AppInput';

  let value;

  export default {
    props: ['columns'],
    components: {
      'app-input': appInput,
    },
    data() {
      return {
        value,
      };
    },
  };
</script>

<style scoped>
</style>
