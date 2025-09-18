<template>
  <div class="container mx-auto my-8">
    <h2
      v-if="meals.length > 0"
      class="text-2xl font-bold mb-6 text-gray-800 px-5"
    >
      Kết quả tìm kiếm
      <span class="text-[20px] font-medium leading-[24px] text-gray-500">
        ({{ meals.length }} món ăn)
      </span>
    </h2>
    <div
      class="grid grid-cols-1 md:grid-cols-4 container mx-auto gap-6 px-5"
      v-if="meals.length > 0"
    >
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <div
      v-if="!meals.length"
      class="flex flex-col justify-center items-center p-8"
    >
      <div
        class="w-16 h-16 flex items-center justify-center mx-auto mb-4 text-gray-400"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          !Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com
          License - https://fontawesome.com/license/free Copyright 2025
          Fonticons, Inc.-->
          <path
            d="M112 208C138.5 208 160 186.5 160 160C160 133.5 138.5 112 112 112C85.5 112 64 133.5 64 160C64 186.5 85.5 208 112 208zM256 128C238.3 128 224 142.3 224 160C224 177.7 238.3 192 256 192L544 192C561.7 192 576 177.7 576 160C576 142.3 561.7 128 544 128L256 128zM256 288C238.3 288 224 302.3 224 320C224 337.7 238.3 352 256 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L256 288zM256 448C238.3 448 224 462.3 224 480C224 497.7 238.3 512 256 512L544 512C561.7 512 576 497.7 576 480C576 462.3 561.7 448 544 448L256 448zM112 528C138.5 528 160 506.5 160 480C160 453.5 138.5 432 112 432C85.5 432 64 453.5 64 480C64 506.5 85.5 528 112 528zM160 320C160 293.5 138.5 272 112 272C85.5 272 64 293.5 64 320C64 346.5 85.5 368 112 368C138.5 368 160 346.5 160 320z"
          />
        </svg>
      </div>
      <h3 class="text-xl font-semibold text-gray-600 mb-2">
        Không có món ăn nào
      </h3>
      <span v-if="selectedLetter" class="text-gray-500">
        Không tìm thấy món ăn nào bắt đầu bằng chữ "{{ selectedLetter }}"
      </span>
     
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import MealItem from "./MealItem.vue";
import {computed} from 'vue'

const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
    default: () => [],
  },
});
const route = useRoute();
const selectedLetter = computed(() => route.params.letter);
</script>
