<template>
  <div class="flex flex-col lg:flex-row min-h-screen bg-gray-100 p-4 lg:p-8 gap-4 lg:gap-8">
    <aside class="w-full lg:w-72 bg-white rounded-lg shadow-md p-4 lg:p-6">
      <h2 class="text-lg lg:text-xl font-semibold mb-4 text-gray-800">Danh sách nguyên liệu</h2>
      <div class="relative mb-4">
        <input
          type="text"
          placeholder="Tìm nguyên liệu..."
          class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          v-model="searchIngredient"
        />
        <svg
          class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>

      <div class="space-y-2 max-h-60 lg:max-h-96 overflow-y-auto">
        <button
          v-for="ingredient in filteredIngredients"
          :key="ingredient.idIngredient"
          @click="selectIngredient(ingredient.strIngredient)"
          :class="[
            'w-full text-left px-4 py-2 rounded-md transition-colors duration-200 block',
            selectedIngredient === ingredient.strIngredient
              ? 'bg-orange-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-700',
          ]"
        >
          {{ ingredient.strIngredient }}
        </button>
      </div>
    </aside>

    <main class="flex-1">
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
        <h1 class="text-xl lg:text-2xl font-bold text-gray-800">
          Món ăn với "{{ selectedIngredient }}"
          <span class="ml-2 px-3 py-1 bg-orange-100 text-orange-700 text-xs lg:text-sm font-semibold rounded-full"
            >{{ mealsByIngredient?.length || 0 }} món</span
          >
        </h1>
        <div class="flex items-center space-x-2 text-gray-600 text-sm lg:text-base">
          <span class="hidden sm:inline">Hiển thị:</span>
          <button
            @click="displayMode = 'grid'"
            :class="[
              'p-2 rounded-md transition-colors duration-200',
              displayMode === 'grid'
                ? 'bg-gray-200 text-gray-900'
                : 'hover:bg-gray-200 hover:text-gray-900',
            ]"
            title="Lưới"
          >
            <svg
              class="w-4 h-4 lg:w-5 lg:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              ></path>
            </svg>
          </button>
          <button
            @click="displayMode = 'list'"
            :class="[
              'p-2 rounded-md transition-colors duration-200',
              displayMode === 'list'
                ? 'bg-gray-200 text-gray-900'
                : 'hover:bg-gray-200 hover:text-gray-900',
            ]"
            title="Danh sách"
          >
            <svg
              class="w-4 h-4 lg:w-5 lg:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div class="max-h-96 lg:max-h-[650px] overflow-y-auto">
        <div v-if="displayMode === 'grid'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          <div 
            v-for="meal in mealsByIngredient" 
            :key="meal.idMeal"
            class="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
              <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full h-40 lg:h-48 object-cover">
            </router-link>
            <div class="p-3 lg:p-4">
              <h3 class="font-bold text-base lg:text-lg mb-2">{{ meal.strMeal }}</h3>
              <p class="text-gray-600 text-xs lg:text-sm">{{ meal.strArea }}</p>
            </div>
          </div>
        </div>
        
        <div v-else class="space-y-3 lg:space-y-4">
          <div 
            v-for="meal in mealsByIngredient" 
            :key="meal.idMeal"
            class="bg-white rounded-lg shadow-md overflow-hidden flex"
          >
            <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }" class="flex-shrink-0">
              <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-24 h-24 lg:w-32 lg:h-32 object-cover">
            </router-link>
            <div class="p-3 lg:p-4 flex-1">
              <h3 class="font-bold text-base lg:text-lg mb-2">{{ meal.strMeal }}</h3>
              <p class="text-gray-600 text-xs lg:text-sm mb-2">{{ meal.strArea }}</p>
              <div class="flex items-center text-xs lg:text-sm text-gray-500">
                <span class="mr-1">🕒</span> 25 phút
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div v-if="!mealsByIngredient?.length && selectedIngredient" class="text-center text-gray-500 mt-8">
        Không tìm thấy món ăn nào với nguyên liệu "{{ selectedIngredient }}"
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import axiosClient from "../axiosClient";
import store from '../store';

const ingredients = ref([]);
const searchIngredient = ref("");
const selectedIngredient = ref("");
const displayMode = ref('grid'); 
const mealsByIngredient = computed(() => store.state.mealsByIngredient);

const filteredIngredients = computed(() => {
    if (!searchIngredient.value) return ingredients.value;
    return ingredients.value.filter((ingredient) =>
        ingredient.strIngredient.toLowerCase().includes(searchIngredient.value.toLowerCase())
    );
});

const selectIngredient = (ingredient) => {
    selectedIngredient.value = ingredient;
    store.dispatch('searchMealsByIngredient', ingredient);
};

onMounted(() => {
    axiosClient.get('/list.php?i=list').then(({ data }) => {
        ingredients.value = data.meals;
        if (data.meals && data.meals.length > 0) {
            selectedIngredient.value = data.meals[0].strIngredient;
            store.dispatch('searchMealsByIngredient', data.meals[0].strIngredient);
        }
    });
});
</script>