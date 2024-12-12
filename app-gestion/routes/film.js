const express = require("express");
const filmsController = require("../controllers/filmsController");
const router = express.Router();

router.post("/", filmsController.createFilm);
router.get("/", filmsController.getAllFilm);
router.get("/:type", filmsController.getFilmByType);
router.get("/:id", filmsController.getFilmById);
router.put("/:id", filmsController.updateFilm);
router.delete("/:id", filmsController.deleteFilm);

module.exports = router;
