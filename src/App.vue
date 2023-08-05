<template>
  <Header></Header>
  <div id="grid">
    <SideMenu />
    <RouterView />
    <Footer />
  </div>
</template>
<script setup>
  import Header from './components/Header.vue';
  import SideMenu from './components/SideMenu.vue';
  import Footer from './components/Footer.vue';
</script>
<style scoped>
  #grid{
    width: 100%;
    margin-top: 9vh;
    display: grid;
    grid-template-columns: 40vh auto;
    grid-template-rows: auto 2vh;
  }
</style>