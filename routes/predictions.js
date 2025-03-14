const express = require("express");
const router = express.Router();

// Fake prediction logic (randomized for now)
const generatePrediction = () => {
  const outcomes = ["Low", "Medium", "High"];
  const randomIndex = Math.floor(Math.random() * outcomes.length);
  return { prediction: outcomes[randomIndex], confidence: Math.random().toFixed(2) };
};

// Prediction route
router.get("/", (req, res) => {
  const result = generatePrediction();
  res.json(result);
});

module.exports = router;
