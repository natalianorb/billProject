<template>
  <label>
    <input :name="attributes.name"
           :type="attributes.type"
           v-model="value"
           @input="passValue"/>
  </label>
</template>

<script>
  export default {
    props: ['attributes'],
    data() {
      return {
        name: this.attributes.name,
        type: this.attributes.type,
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

        this.$emit('input', data);
      },
    },
  };
</script>

<style scoped>
</style>
