<template>
  <tbody>
  <tr>
    <td>
      <text-input/>
    </td>
    <td>
      <count-input/>
    </td>
    <td>
      <monetary-input/>
    </td>
    <td>

    </td>
  </tr>
  </tbody>
</template>

<script>
  import textInput from './inputs/TextInput';
  import countInput from './inputs/CountInput';
  import monetaryInput from './inputs/MonetaryInput';

  let value;

  export default {
    props: ['columns'],
    components: {
      'text-input': textInput,
      'count-input': countInput,
      'monetary-input': monetaryInput,
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
