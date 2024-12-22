var gameModel = require("../models/gamesModel");

exports.createGame = async (req, res) => {
  try {
    const game = new gameModel(req.body);
    await game.save();
    res.status(201).json(game);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllGames = async (req, res) => {
  try {
    const game = await gameModel.find();
    res.status(200).json(game);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getGamesByType = async (req, res) => {
  try {
    const game = await gameModel.find({ type: req.params.type });
    res.status(200).json(game);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getGameById = async (req, res) => {
  try {
    const game = await gameModel.findById(req.params.id);
    res.status(200).json(game);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.updateGame = async (req, res) => {
  try {
    const game = await gameModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!game) {
      return res.status(404).json({ message: "jeux non trouvé" });
    }
    res.status(200).json(game);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteGame = async (req, res) => {
  try {
    const game = await gameModel.findByIdAndDelete(req.params.id);
    if (!game) {
      return res.status(404).json({ message: "jeux non trouvé" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
