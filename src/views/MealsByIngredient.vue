<template>
    <Meals :meals="meals" />
</template>
<script setup>
import { computed } from 'vue';
import { onMounted, ref } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import Meals from "../components/Meals.vue"
const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient)
onMounted(() => {
    store.dispatch('searchMealsByIngredient',route.params.ingredients)  
})
</script>