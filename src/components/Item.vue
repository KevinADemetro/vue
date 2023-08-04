<script setup>
    defineProps(['title'])
</script>
<template>
    <div class="container">
        <div>
            <h1>{{ title }}</h1>
            <p>Lorem ipsum dolor sit amet, <br/>
                consectetur adipiscing elit.</p>
        </div>
        <button class="btn fill">BUY NOW</button>
        <button @click="$emit('enlarge-text')">Enlarge text</button>
    </div>
</template>

<style scoped>
</style>