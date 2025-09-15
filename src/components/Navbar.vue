<template>
  <nav class="bg-white shadow-md p-4">
    <div class="container mx-auto flex justify-between items-center">
      <router-link :to="{ name: 'home' }" class="text-2xl font-bold text-orange-500">
            FoodSearch
        </router-link>
        <div class="flex items-center gap-1">
            <router-link :to="{ name: 'byName' }"
                class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-200">
                Search Meals
            </router-link>
            <router-link :to="{ name: 'byLetter' }"
                class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-200">
                Meals By Letter
            </router-link>
            <router-link :to="{ name: 'ingredients' }"
                class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-200">
                Meals By Ingredient
            </router-link>
        </div>
    </div>
  </nav>
 
  

</template>

