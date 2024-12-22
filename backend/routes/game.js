const express = require("express");
const gamesController = require("../controllers/gamesController");
const router = express.Router();

router.post("/", gamesController.createGame);
router.get("/", gamesController.getAllGames);
router.get("/:type", gamesController.getGamesByType);
router.get("/:id", gamesController.getGameById);
router.put("/:id", gamesController.updateGame);
router.delete("/:id", gamesController.deleteGame);

module.exports = router;
