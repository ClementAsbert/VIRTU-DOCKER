<template>
    <AddMovieComponent/>
    <div>
      <h1>Liste des Films</h1>
      <div class="movie-grid" v-if="movies.length">
        <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
      </div>
      <p v-else>Chargement des films...</p>
    </div>
</template>
  
<script>
    import axios from "axios";
    import MovieCard from "./MovieCard.vue"; // Import du composant MovieCard
    import AddMovieComponent from "./AddMovieComponent.vue";


    export default {
    name: "MovieList",
    components: {
      MovieCard,
      AddMovieComponent
    },
    data() {
      return {
        movies: [],
      };
    },
    async created() {
      try {
        const response = await axios.get("http://localhost:3000/api/films");
        this.movies = response.data;
      } catch (error) {
        console.error("Erreur lors du chargement des films :", error);
      }
    },
  };
  </script>
  
  <style scoped>
  .movie-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-around;
  }
  </style>
  