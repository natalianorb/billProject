<template>
  <label>
    <input :name="name"
           :type="computedType"
           v-model="value"
           :step="computedStep"
           :min="(type==='count' || type==='monetary')? 0 : false"/>
  </label>
</template>

<script>
  let value;

  export default {
    props: ['name', 'type'],
    computed: {
      computedType() {
        let computedType;

        switch (this.type) {
          case 'text':
            computedType = 'text';
            break;
          case 'count':
            computedType = 'number';
            break;
          case 'monetary':
            computedType = 'number';
            break;
          default:
            computedType = 'text';
        }
        return computedType;
      },
      computedStep() {
        let computedStep;

        switch (this.type) {
          case 'count':
            computedStep = '1';
            break;
          case 'monetary':
            computedStep = '0.01';
            break;
          default:
            computedStep = false;
        }
        return computedStep;
      },
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
