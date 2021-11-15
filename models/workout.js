const mongoose = require('mongoose');
const {Schema} = mongoose;

const workoutSchema = new Schema({
    day:{
        type: Date,
        default: Date.now
    },
    exercise: [{
        type: [String],
        name:{
            type: String,
            trim: true,
            required: 'Please, enter the name of the exercise'
        },
        duration:{
            type: [Number],
            require: 'Please, enter the duration'
        },
        reps:{type: [Number]},
        sets:{type: [Number]},
        distance: {type: [Number]},
        weight:{type: [Number]},
    }],
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;