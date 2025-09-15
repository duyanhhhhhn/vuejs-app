
<template>
    <h2 v-if="meals.length > 0" class="text-2xl font-bold mb-6 text-gray-800 px-5">Kết quả tìm kiếm ({{ meals.length }} món ăn)</h2>
    <div class="grid grid-cols-1 md:grid-cols-5 container mx-auto gap-6 px-5" v-if="meals.length > 0">
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <div v-if="!meals.length" class="flex justify-center text-gray-600 p-8">
        There are no meals
    </div>
</template>

<script setup>
import MealItem from './MealItem.vue';

const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
    default: () => []
  }
})

</script>