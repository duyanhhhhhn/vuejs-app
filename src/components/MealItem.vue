<template>
 
  <div class="container mx-auto px-4 py-8"  :key="meal.idMeal">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-6 h-full">
      <div class="bg-white rounded-lg shadow-md overflow-hidden relative">
         <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-48 object-cover">
        </router-link>
        <span class="absolute top-2 right-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full">{{ meal.strCategory }}</span>
        <div class="p-4">
          <h3 class="font-bold text-lg mb-1 text-gray-800">{{ meal.strMeal }}</h3>
          <p class="text-gray-600 text-sm">{{ meal.strArea }}</p>
            
           
              <div class="flex items-center justify-between">
                 <div class="flex items-center text-sm text-gray-500 mt-2">
              <span class="mr-1">🕒</span> 25 phút
            </div>
                <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from '../views/YoutubeButton.vue';
const { meal } = defineProps({
    meal: {
        required: true,
        type:Object
    }
})
</script>