const mongoose = require('mongoose');
const {Schema} = mongoose;

const workoutSchema = new Schema({
    type: String,
    name:{
        type: String,
        trim: true,
        required: 'Please, enter the name of the exercise'
    },
    reps:{type: Number},
    sets:{type: Number},
    duration:{type: Number},
    distance: {type: Number},
    weight:{type: Number},
    date:{
        type: Date,
        default: Date.now
    },
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;