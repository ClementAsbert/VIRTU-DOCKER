<template>
    <div class="game-card">
      <h3>{{ game.name }}</h3>
      <p><strong>Type :</strong> {{ game.type }}</p>
      <p><strong>Prix :</strong> {{ game.price }} €</p>
      <p><strong>Description :</strong> {{ game.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "GameCard",
    props: {
      game: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .game-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 15px;
    margin: 10px;
    width: 250px;
    text-align: left;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .game-card h3 {
    margin: 0;
    color: #007bff;
  }
  
  .game-card p {
    margin: 5px 0;
  }
  </style>
  