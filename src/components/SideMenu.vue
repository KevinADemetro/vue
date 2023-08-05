<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/items">Items List</RouterLink>
    </nav>
</template>
<script setup>
    import { RouterLink } from 'vue-router'
</script>
<style scoped>
    a {
        text-decoration: none;
        color: #e1e1e1;
        transition: 0.2s;
    }
    @media (hover: hover) {
        a:hover {
        color: #00bd7e;
        padding: 0.5rem;
        border-radius: 0.5rem;
        background-color: #292929;
        box-shadow: 
        0 0 5vh #fff;
    }

    nav a {
        float: left;
        margin-left: 2rem;
    }
}
</style>