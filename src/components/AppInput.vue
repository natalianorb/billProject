<template>
  <label>
    <input :name="name"
           :type="type"
           v-model="value"
           @input="returnValue"
           class="input"/>
  </label>
</template>

<script>
  export default {
    props: ['name', 'type'],
    data() {
      return {
        value: null,
      };
    },
    methods: {
      returnValue() {
        this.$emit('input', this.value);
      },
    },
  };
</script>

<style scoped>
  .input {
    height: 2rem;
    border: none;
    border-bottom: 1px solid #9e9e9e;
    border-radius: 0;
    box-shadow: none;
    transition: all .3s;
  }
  .input:focus {
    border-bottom: 1px solid #26a69a;
    box-shadow: 0 1px 0 0 #26a69a;
  }
</style>
