<template>
    <div>
      <div class="container">
        <section>
          <h2>Jeux</h2>
          <div class="grid">
            <GameCard v-for="game in games" :key="game.id" :game="game" />
          </div>
        </section>
  
        <section>
          <h2>Films</h2>
          <div class="grid">
            <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  import GameCard from "./GameCard.vue";
  import MovieCard from "./MovieCard.vue";
  
  export default {
    name: "ItemList",
    components: {
      GameCard,
      MovieCard,
    },
    props: {
      games: {
        type: Array,
        required: true,
      },
      movies: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        isModalVisible: false,
        itemType: "game", // 'game' par défaut
      };
    },
    methods: {
      openModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
      addItem(newItem) {
        // Envoyer les données à la base de données
        console.log("Ajout dans la BDD : ", newItem);
  
        // Ajouter à la liste localement (à améliorer pour une app réelle)
        if (newItem.type === "game") {
          this.$emit("update-games", [...this.games, newItem]);
        } else if (newItem.type === "movie") {
          this.$emit("update-movies", [...this.movies, newItem]);
        }
      },
    },
  };

  
  </script>
  
  <style scoped>
  .container {
    padding: 20px;
  }
  
  .grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  section {
    margin-bottom: 40px;
  }
  </style>
  