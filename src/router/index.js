import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import GuestLayout from "../components/GuestLayout.vue";
import MealsByName from "../views/MealsByName.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByIngredient from "../views/MealsByIngredient.vue";
import MealDetails from "../views/MealDetails.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import Ingredient from "../views/Ingredient.vue"
const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },
       {
        path: "/ingredients",
        name: "ingredients",
        component: Ingredient,
      },
      {
        path: "/by-ingredients/:ingredients",
        name: "byIngredient",
        component: MealsByIngredient,
      },
       {
        path: "/meal/:id",
        name: "mealDetails",
         component: MealDetails,
        
      },
    ],
  },
  {
    path: "/guest",
    component: GuestLayout,
    children: [],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
