const apiRouter = require("express").Router();
const Workout = require("../models/workout.js");

apiRouter.post("/workouts", ({ body }, res) => {
  Workout.create({ body })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = apiRouter