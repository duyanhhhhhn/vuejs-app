<template>
    <div class="p-8">
        <h1 class="text-4xl font-bold">Ingredients</h1>
        <input type="text" v-model="keyword" class="rounded border-2 border-gray-200 w-full mt-3 mb-3"
            placeholder="Search for Ingredients">
        <router-link :to="{ name: 'byIngredient', params: { ingredients: ingredient.strIngredient } }"
            v-for="ingredient of computedIngredients" :key="ingredient.idIngredient"
            class="bg-white rounded mb-3 p-3 shadow block">
            <h3 class="text-2xl font-bold">{{ ingredient.strIngredient }}</h3>
            <p>{{ ingredient.strDescription }}</p>
        </router-link>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from "../axiosClient";
import { computed } from 'vue';
const ingredients = ref([]);
const keyword = ref("");
const computedIngredients = computed(() => {
    if (!computedIngredients) return ingredients;
    return ingredients.value.filter((i) =>
        i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
    );
});
onMounted(() => {
    axiosClient.get('/list.php?i=list').then(({ data }) => {
        ingredients.value = data.meals;
    });
});
</script>
