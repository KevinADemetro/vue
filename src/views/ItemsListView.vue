<script setup>
    import Item from "../components/Item.vue";
    import { ref } from 'vue'
    const items = ref([
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
    ]);
    const itemFontSize = ref(1);
</script>

<template>
    <div class="container">
        <h1>Items List</h1>
        <div :style="{ fontSize: itemFontSize + 'em' }">
            <Item
                v-for="item in items"
                :key="item.id"
                :title="item.title"
                @enlarge-text="itemFontSize += 0.1"
            />
        </div>
    </div>
</template>
<style scoped>
</style>