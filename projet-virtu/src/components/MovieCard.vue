<template>
    <div class="movie-card">
      <h3>{{ movie.name }}</h3>
      <p><strong>Description :</strong> {{ movie.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "MovieCard",
    props: {
      movie: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .movie-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 15px;
    margin: 10px;
    width: 250px;
    text-align: left;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .movie-card h3 {
    margin: 0;
    color: #ff5722;
  }
  
  .movie-card p {
    margin: 5px 0;
  }
  </style>
  