<template>
  <label>
    <input :name="attributes.name"
           :type="attributes.type"
           v-model="newAttributes.value"
           @input="returnNewAttributes"/>
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
</style>
