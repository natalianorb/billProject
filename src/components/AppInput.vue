<template>
  <label>
    <input :name="name"
           :type="type"
           v-model="value"/>
  </label>
</template>

<script>
  let value;

  export default {
    props: ['name', 'type'],
    data() {
      return {
        value,
      };
    },
  };
</script>

<style scoped>
</style>
