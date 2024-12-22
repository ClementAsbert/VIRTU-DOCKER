<template>
    <AddGameComponent/>
    <div>
      <h1>Liste des Jeux</h1>
      <div class="game-grid" v-if="games.length">
        <GameCard v-for="game in games" :key="game.id" :game="game" />
      </div>
      <p v-else>Chargement des jeux...</p>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import GameCard from "./GameCard.vue"; // Import du composant GameCard
  import AddGameComponent from "./AddGameComponent.vue";


  export default {
    name: "GameList",
    components: {
      GameCard,
      AddGameComponent
    },
    data() {
      return {
        games: [],
      };
    },
    async created() {
      try {
        const response = await axios.get("http://localhost:3000/api/games");
        this.games = response.data;
      } catch (error) {
        console.error("Erreur lors du chargement des jeux :", error);
      }
    },
  };
  </script>
  
  <style scoped>
  .game-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-around;
  }
  </style>
  