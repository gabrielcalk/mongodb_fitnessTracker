const apiRouter = require('express').Router();
const Workout = require('../models/workout');

/**
 * @router /api/workouts
 */
apiRouter.get('/workouts', async(req, res) => {
  try{
// Grabbing the last workout data and adding the duration numbers
    const data = await Workout.aggregate([
      {
        $addFields:{
          totalDuration:{
            $sum: '$exercises.duration',
          }
      }},
// Sorting dsc
      {$sort: {date: -1}}
    ])
    res.status(200).json(data)
  } catch(err){
    res.status(500).send(err)
  }
});

/**
 * @router /api/workouts/range
 * Getting the workout data to the stats page (chart)
 */
apiRouter.get('/workouts/range', async(req, res) => {
  try{
    const data = await Workout.aggregate([
      {
        $addFields:{
          totalDuration:{
            $sum: '$exercises.duration',
          }
      }},
      {$sort: {date: -1}}
    ])
    res.status(200).json(data)
  } catch(err){
    res.status(500).send(err)
  }
});

/**
 * @router /api/workouts/ - POST
 */
apiRouter.post('/workouts', ({ body }, res) => {
// Creating new workout (only the ID)
  Workout.create({ body })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

/**
 * @router /api/workouts/ - PUT
 */
apiRouter.put('/workouts/:id', async (req, res) =>{
  try{
// Updating the workout that has been created after the use click on "new workout"
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

/**
 * @exports /api - ROUTER
 */
module.exports = apiRouter;