<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="lg:flex">
          <div class="lg:w-1/2">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full h-64 lg:h-full object-cover" />
          </div>
          
          <div class="lg:w-1/2 p-6 lg:p-8">
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full">
                {{ meal.strCategory }}
              </span>
              <span class="px-3 py-1 bg-gray-200 text-gray-700 text-sm font-semibold rounded-full">
                {{ meal.strArea }}
              </span>
            </div>
            
            <h1 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{{ meal.strMeal }}</h1>
            
            <p class="text-gray-600 text-base leading-relaxed mb-6">
              {{ meal.strInstructions?.substring(0, 200) }}...
            </p>
            
            <div class="mb-6">
              <h2 class="text-xl font-semibold text-gray-900 mb-4">Nguyên liệu chính:</h2>
              <div class="flex flex-wrap gap-2">
                <template v-for="index in 10" :key="index">
                  <span v-if="meal[`strIngredient${index}`] && meal[`strIngredient${index}`].trim()" 
                        class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    {{ meal[`strIngredient${index}`] }}
                  </span>
                </template>
                <span v-if="getIngredientCount() > 10" class="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                  +{{ getIngredientCount() - 10 }} khác
                </span>
              </div>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-3">
              <YoutubeButton :href="meal.strYoutube" class="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Xem Video Hướng Dẫn
              </YoutubeButton>
              <a v-if="meal.strSource" :href="meal.strSource" target="_blank"
                 class="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors text-center">
                Nguồn Gốc
              </a>
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-200 p-6 lg:p-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 class="text-2xl font-semibold text-gray-900 mb-4">Nguyên liệu và đo lường:</h2>
              <div class="space-y-3">
                <template v-for="index in 20" :key="index">
                  <div v-if="meal[`strIngredient${index}`] && meal[`strIngredient${index}`].trim()" 
                       class="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg">
                    <span class="font-medium text-gray-900">{{ meal[`strIngredient${index}`] }}</span>
                    <span class="text-gray-600">{{ meal[`strMeasure${index}`] || 'Vừa đủ' }}</span>
                  </div>
                </template>
              </div>
            </div>
            
            <div>
              <h2 class="text-2xl font-semibold text-gray-900 mb-4">Cách làm:</h2>
              <div class="prose prose-gray max-w-none">
                <div class="space-y-3">
                  <template v-for="(step, index) in getInstructionSteps()" :key="index">
                    <div class="flex gap-3">
                      <span class="flex-shrink-0 w-6 h-6 bg-orange-500 text-white text-sm font-semibold rounded-full flex items-center justify-center">
                        {{ index + 1 }}
                      </span>
                      <p class="text-gray-700 leading-relaxed">{{ step }}</p>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, computed } from "vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YoutubeButton from "./YoutubeButton.vue";

const route = useRoute();
const meal = ref({});

const getIngredientCount = () => {
  let count = 0;
  for (let i = 1; i <= 20; i++) {
    if (meal.value[`strIngredient${i}`] && meal.value[`strIngredient${i}`].trim()) {
      count++;
    }
  }
  return count;
};

const getInstructionSteps = () => {
  if (!meal.value.strInstructions) return [];
  return meal.value.strInstructions
    .split('.')
    .filter(step => step.trim().length > 10)
    .map(step => step.trim())
    .slice(0, 10);
};

onMounted(() => {
  axiosClient.get(`/lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>
