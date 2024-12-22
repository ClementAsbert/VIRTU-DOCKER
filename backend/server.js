const express = require("express");
const mongoose = require("mongoose");
const filmsRoutes = require("./routes/film");
const gamesRoutes = require("./routes/game");
const cors = require("cors")
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());


app.use("/api/films", filmsRoutes);
app.use("/api/games", gamesRoutes);

mongoose
  .connect(process.env.MONGO_CONNECT)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Erreur lors de la connexion à MongoDB", err);
    process.exit(1);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
