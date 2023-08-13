<template>
    <input 
          type="text" 
          :value="modelValue"
          @input="updateInput"
          required
          >
</template>

<script>
export default {
    name: 'InputElement',
    props: {
        modelValue: [String, Number],
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>
input {
    padding: 10px;
    border: 2px solid #01010152;
}
</style>