<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/items">Items List</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
  nav{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: red;
    padding: 10px;
    text-align: center;
  }
  nav a {
    float: left;
    margin-left: 2rem;
  }
</style>
