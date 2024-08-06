<template>
    <div class="max-w-[800px] mx-auto">
        <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]" />
        <div class="grid grid-cols-1 md:grid-cols-3 text-lg py-2">
            <div>
                <strong class="font-bold"> Category: {{ meal.strCategory }} </strong>
            </div>
            <div>
                <strong class="font-bold"> Area: {{ meal.strArea }} </strong>
            </div>
            <div>
                <strong class="font-bold"> Tag: {{ meal.strTags }} </strong>
            </div>
        </div>
        <div class="my-3">
            {{ meal.strInstructions }}
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2">
            <div>
                <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
                <ul>
                    <template v-for="index in 20" :key="index">
                        <li v-if="meal[`strIngredient${index}`]">{{ index }}. {{ meal[`strIngredient${index}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div>
                <h2 class="text-2xl font-semibold mb-2">Measures</h2>
                <ul>
                    <template v-for="index in 20" :key="index">
                        <li v-if="meal[`strMeasure${index}`]">{{ index }}. {{meal[`strMeasure${index}`] }}</li>
                    </template>
                </ul>
            </div>
            <div class="mt-4">
                <YoutubeButton :href="meal.strYoutube">Go to Youtube</YoutubeButton>
                <a :href="strSource" target="_blank"
                    class="ml-3 px-3 py-2 text-indigo-700 rounded border-2 border-transparent cursor-pointer transition-colors">
                    View Original Source
                </a>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from "vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YoutubeButton from "./YoutubeButton.vue";
const route = useRoute();
const meal = ref({});
onMounted(() => {
  axiosClient.get(`/lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>
