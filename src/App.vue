<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header><h1>Nome</h1></header>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/items">Items List</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
  header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #1a1a1a;
    padding: 10px;
    text-align: center;
  }

  nav a {
    float: left;
    margin-left: 2rem;
  }
</style>
