const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/product");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/api/products", productRoutes);

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
