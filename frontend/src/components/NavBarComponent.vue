<template>
    <nav class="navbar">
      <router-link to="/games" class="navbar-item">Jeux</router-link>
      <router-link to="/movies" class="navbar-item">Films</router-link>
    </nav>
  </template>
  
  <script>
  export default {
    name: "NavBarComponent",
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f4f4f4;
    padding: 10px;
    border-bottom: 2px solid black;
  }
  
  .navbar-item {
    font-weight: bold;
    text-decoration: none;
    color: black;
  }
  
  .navbar-item:hover {
    color: blue;
  }
  </style>
  