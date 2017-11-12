<template>
  <label>
    <input :name="name"
           :type="type"
           v-model="value"
           @input="passValue"/>
  </label>
</template>

<script>
  export default {
    props: ['name', 'type', 'index'],
    data() {
      return {
        value: '',
      };
    },
    methods: {
      passValue() {
        const data = {
          name: this.name,
          type: this.type,
          value: this.value,
        };

        this.$emit('update', data, this.index);
      },
    },
  };
</script>

<style scoped>
</style>
