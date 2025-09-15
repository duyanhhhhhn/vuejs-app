<template>
    <div class="relative bg-cover bg-center h-96 flex items-center justify-center text-white" 
       :style="{ backgroundImage: `url(${bgImage})` }">
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="relative z-10 text-center">
      <h1 class="text-5xl font-bold mb-4">Khám Phá Thế Giới Ẩm Thực</h1>
      <p class="text-xl mb-8 max-w-2xl mx-auto">Tìm kiếm hàng ngàn món ăn ngon từ khắp nơi trên thế giới. Từ các món truyền thống đến hiện đại.</p>
      <div class="flex justify-center">
        <div class="relative w-full max-w-md">
          <input type="text" placeholder="Tìm kiếm món ăn..." 
                 class="w-full py-3 pl-12 pr-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500" v-model="keyword" />
          <svg class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" width="20" height="20" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    <button class="absolute right-0 top-0 h-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full" @click="searchMeals">
            Tìm kiếm
          </button>

        </div>
      </div>
    </div>
  </div>

    <Meals :meals="meals" />
</template>
<script setup>
import { onMounted } from 'vue';
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import Meals from "../components/Meals.vue"
const keyword = ref("");
const store = useStore();
const meals = computed(() => store.state.searchedMeals);
const route = useRoute();
import bgImage from "../assets/background.jpg";

function searchMeals() {
        store.dispatch('searchMeals', keyword.value);
}
onMounted(() => {
    keyword.value = route.params.name 
    if (keyword.value) {
        searchMeals()
    }
})
</script>
