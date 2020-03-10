<template>
    <div class="container">
        <input v-model="filteredText">
        <ul>
          <li v-for="(fruit, index) in filteredFruits" :key="index">{{fruit}}</li>
        </ul>
    </div>
</template>

<script>
import { fruitMixin } from './filteredFruitsMixin'
    export default {
        components: {
        },
        mixins: [fruitMixin]
    }
</script>

<style>
#test123 {
    cursor: pointer;
    user-select: none;
}
</style>
