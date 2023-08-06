<template>
    <nav :class="['menu', collapsed ? 'collapsed' : 'expanded']">
        <font-awesome-icon @click.prevent="collapsed = !collapsed" icon="fa-solid fa-bars" size="2x"/>
        <div class="menu-item">
            <font-awesome-icon icon="fa-solid fa-home" />
            <RouterLink to="/" v-if="!collapsed">Home</RouterLink>
        </div>
        <div class="menu-item">
            <font-awesome-icon icon="fa-solid fa-home" />
            <RouterLink to="/items" v-if="!collapsed">Items list</RouterLink>
        </div>
    </nav>
</template>
<script setup>
    import { RouterLink } from 'vue-router'
    import { ref } from 'vue'

    const collapsed = ref(false);
</script>
<style scoped>
    nav{
        display: flex;
        flex-direction: column;
        width: 7vw;
        transition: width 0.3s ease;
        margin-left: 1rem;
    }
    .collapsed{
        width: 6vw;
    }
    .expanded{
        width: 20vw;
    }
</style>