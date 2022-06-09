<script setup>
    import { RouterLink } from 'vue-router';
    import { RouterView } from 'vue-router';
</script>

<template>
    <router-link to="/">Home</router-link><br>
    <router-link to="/about">About</router-link><br>
    <router-link to="/hello">Hello</router-link><br>
   
    <router-view />
</template>