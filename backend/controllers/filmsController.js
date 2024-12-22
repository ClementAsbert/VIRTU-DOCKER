var filmModel = require("../models/filmModel");

exports.createFilm = async (req, res) => {
  try {
    const film = new filmModel(req.body);
    await film.save();
    res.status(201).json(film);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllFilm = async (req, res) => {
  try {
    const film = await filmModel.find();
    res.status(200).json(film);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getFilmByType = async (req, res) => {
  try {
    const film = await filmModel.find({ type: req.params.type });
    res.status(200).json(film);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getFilmById = async (req, res) => {
  try {
    const film = await filmModel.findById(req.params.id);
    res.status(200).json(film);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.updateFilm = async (req, res) => {
  try {
    const film = await filmModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!film) {
      return res.status(404).json({ message: "Film non trouvé" });
    }
    res.status(200).json(film);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteFilm = async (req, res) => {
  try {
    const film = await filmModel.findByIdAndDelete(req.params.id);
    if (!film) {
      return res.status(404).json({ message: "Film non trouvé" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
