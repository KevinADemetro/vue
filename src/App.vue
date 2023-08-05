<script setup>
import Header from './components/Header.vue';
import SideMenu from './components/SideMenu.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header></Header>
  <SideMenu></SideMenu>
  <RouterView />
  <Footer></Footer>
</template>

<style scoped>
</style>
