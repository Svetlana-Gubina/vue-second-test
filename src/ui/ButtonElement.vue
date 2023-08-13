<template>
    <button 
          :type="type"
          >
          <slot></slot></button>
</template>

<script>
export default {
    name: 'ButtonElement',
    props: {
        type: {
            type:  String,
            default: 'button'
        },
    },
}
</script>

<style scoped>
button {
    padding: 10px;
    background-color: transparent;
    border: 2px solid #01010152;
    box-shadow: none;
    cursor: pointer;
}
button:hover,
button:focus {
    background-color:#000000;
    color: #ffffff;
    border: 2px solid #000000;
}
button:active {
    background-color: transparent;
    border: 2px solid #01010152;
}
</style>