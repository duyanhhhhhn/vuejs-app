<template>
  <nav class="bg-white shadow-md p-4">
    <div class="container mx-auto">
      <div class="flex justify-between items-center">
        <router-link :to="{ name: 'home' }" class="font-['Pacifico'] text-lg sm:text-xl font-bold flex items-center italic text-orange-500">
          <div class="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center p-1 mr-2">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 2V22H19V15H15V8C15 4.68629 17.6863 2 21 2ZM19 4.53C18.17 5 17 6.17 17 8V13H19V4.53ZM9 13.9V22H7V13.9C4.71776 13.4367 3 11.419 3 9V3H5V10H7V3H9V10H11V3H13V9C13 11.419 11.2822 13.4367 9 13.9Z"></path></svg>
          </div>
          FoodFinder
        </router-link>

        <div class="hidden sm:flex items-center gap-1">
          <router-link :to="{ name: 'byName' }"
              class="inline-flex items-center px-2 h-full transition-colors hover:text-orange-500">
              Tìm kiếm Món ăn
          </router-link>
          <router-link :to="{ name: 'byLetter' }"
              class="inline-flex items-center px-2 h-full transition-colors hover:text-orange-500">
              Bảng Chữ Cái
          </router-link>
          <router-link :to="{ name: 'ingredients' }"
              class="inline-flex items-center px-2 h-full transition-colors hover:text-orange-500">
              Món ăn theo nguyên liệu
          </router-link>
        </div>

        <button @click="toggleMobileMenu" class="sm:hidden p-2">
          <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <div v-show="mobileMenuOpen" class="sm:hidden mt-4 pt-4 border-t border-gray-200">
        <div class="flex flex-col space-y-2">
          <router-link :to="{ name: 'byName' }" @click="closeMobileMenu"
              class="block px-3 py-2 text-base transition-colors hover:text-orange-500 hover:bg-orange-50 rounded">
              Tìm kiếm Món ăn
          </router-link>
          <router-link :to="{ name: 'byLetter' }" @click="closeMobileMenu"
              class="block px-3 py-2 text-base transition-colors hover:text-orange-500 hover:bg-orange-50 rounded">
              Bảng Chữ Cái
          </router-link>
          <router-link :to="{ name: 'ingredients' }" @click="closeMobileMenu"
              class="block px-3 py-2 text-base transition-colors hover:text-orange-500 hover:bg-orange-50 rounded">
              Món ăn theo nguyên liệu
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};
</script>

