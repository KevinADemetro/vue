<script setup>
import Header from './components/Header.vue';
import SideMenu from './components/SideMenu.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header></Header>
  <div id="grid">
    <SideMenu></SideMenu>
    <RouterView />
    <Footer></Footer>
  </div>
</template>
<style scoped>
  #grid{
    margin-top: 8vh;
  }
</style>