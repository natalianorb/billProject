<template>
  <label>
    <input :name="attributes.name"
           :type="attributes.type"
           v-model="newAttributes.value"
           @input="returnNewAttributes"
           class="input"/>
  </label>
</template>

<script>
  export default {
    props: ['attributes'],
    data() {
      return {
        newAttributes: {
          name: this.attributes.name,
          type: this.attributes.type,
          value: null,
        },
      };
    },
    methods: {
      returnNewAttributes() {
        this.$emit('input', this.newAttributes);
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
