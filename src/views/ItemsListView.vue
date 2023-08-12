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
<script setup>
    import Item from "../components/Item.vue";
    import { ref } from 'vue'
    import ItemsService from "../services/ItemsService";

    const items = ref(null);
    ItemsService.getAll().then(result => items.value = result.data);
    const itemFontSize = ref(1);
</script>
<style scoped>
</style>