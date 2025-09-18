<template>
    <div class="flex flex-col items-center justify-center pt-5 px-4">
        <h1 class="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">Món Ăn Ngẫu Nhiên</h1>
        <p class="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-normal text-center mt-2 max-w-2xl">
            Khám phá những món ăn bất ngờ và thú vị từ khắp nơi trên thế giới
        </p>
    </div>
    <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import Meals from "../components/Meals.vue";
import axiosClient from "../axiosClient.js";

const meals = ref([]);

onMounted(async () => {
    for (let i = 0; i < 10; i++) {
        axiosClient
            .get(`random.php`)
            .then(({ data }) => meals.value.push(data.meals[0]));
    }
});
</script>