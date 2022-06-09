<template>
    <button @click="hello">Click</button>
   
</template>

<script setup>
  
    const props = defineProps(['userName'])
    function hello(){
        alert("Hello "+props.userName)
    }
</script>