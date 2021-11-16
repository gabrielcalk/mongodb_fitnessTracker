const apiRouter = require('express').Router();
const Workout = require('../models/workout');

apiRouter.get('/workouts', async(req, res) => {
  try{
    const data = await Workout.find({}).sort({ date: -1 })
    // Getting the lastWorkout by descending order
    console.log(data)
    res.status(200).send(data)
  } catch(err){
    res.status(500).send(err)
  }
})

apiRouter.post('/workouts', ({ body }, res) => {
  Workout.create({ body })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

apiRouter.put('/workouts/:id', async (req, res) =>{
  try{
      Workout.findByIdAndUpdate(
        req.params.id,
        { $push: { exercises: req.body } },
      )
  } catch(err){
    console.log(err)
  }
})

module.exports = apiRouter;