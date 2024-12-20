import { createRouter, createWebHistory } from "vue-router";
import GameList from "../components/GameList.vue";
import MovieList from "../components/MovieList.vue";

const routes = [
  {
    path: "/games",
    name: "Games",
    component: GameList,
  },
  {
    path: "/movies",
    name: "Movies",
    component: MovieList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
