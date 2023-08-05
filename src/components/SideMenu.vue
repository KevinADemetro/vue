<template>
    <nav :class="['menu', collapsed ? 'collapsed' : 'expanded']">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/items">Items List</RouterLink>
    </nav>
</template>
<script setup>
    import { RouterLink } from 'vue-router'
    import { ref } from 'vue'

</script>
<style scoped>
    nav{
        display: flex;
        flex-direction: column;
        width: 6vw;
        transition: width 0.3s ease;
    }

    nav:hover{
        width: 20vw;
    }
</style>