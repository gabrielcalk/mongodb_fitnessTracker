const apiRouter = require('express').Router();
const Workout = require('../models/workout');

apiRouter.get('/workouts', async(req, res) => {
  try{
    const data = await Workout.find({}).sort({ date: -1 })
    // Getting the lastWorkout by descending order
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
    const updateWorkout = await Workout.updateOne({"_id": req.params.id}, 
      {$push: {exercises: req.body}},
      function(err) {
        if(err) {//handle error}
          console.log(err)
        }
      }
    );
    res.status(200).json(updateWorkout)
  } catch(err){
    console.log(err)
  }
})

module.exports = apiRouter;