<template>
  <label>
    <input type="text" v-model="value"/>
  </label>
</template>

<script>
  let value;

  export default {
    data() {
      return {
        value,
      };
    },
  };
</script>

<style scoped>
</style>
