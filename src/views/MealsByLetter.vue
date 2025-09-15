<template>
    <div className="flex flex-col items-center justify-center p-2">
        <span className="md:text-[32px] text-[16px] font-bold">
            Món Ăn Theo Bảng Chữ Cái
        </span>
         <span className="md:text-[16px] text-[12px] text-gray-500 mt-2">
           Duyệt tất cả món ăn được sắp xếp theo thứ tự bảng chữ cái
        </span>
    </div>
  <div class="p-6 bg-white rounded-lg shadow-sm container mx-auto mt-5">
    <h3 class="text-xl font-semibold mb-4 text-gray-800">Chọn chữ cái đầu</h3>
    <div class="flex flex-wrap md:gap-4 gap-2">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
        :class="[
          'px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200',
          selectedLetter === letter
            ? 'bg-orange-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-orange-100 hover:text-orange-700',
        ]"
      >
        {{ letter }}
      </router-link>
    </div>
  </div>
  <Meals :meals="meals" />
</template>

<script setup>
import { computed } from "vue";
import store from "../store";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { watch } from "vue";
import Meals from "../components/Meals.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);
const selectedLetter = computed(() => route.params.letter || "A");

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter || "A");
});
onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter || "A");
});
</script>
