const apiRouter = require('express').Router();
const Workout = require('../models/workout.js');

apiRouter.post('/workouts', ({ body }, res) => {
  Workout.create({ body })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

apiRouter.put('/workouts/:id', (req, res) =>{
  Workout.updateOne({_id: req.body.id},  {'$set': {
      "exercise.$.name": req.body.name,
    }}
  )
})

module.exports = apiRouter;