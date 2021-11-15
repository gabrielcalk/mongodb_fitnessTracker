const mongoose = require('mongoose');
const {Schema} = mongoose;

const cardioSchema = new Schema({
    type: {
        type: String,
    },
    name: {
        type: String,
        trim: true,
        require: 'Provide the name of the exercise'
    },
    distance: {
        type: Number,
        required: 'Please, enter the distance'
    },
    duration: {
        type: Number,
        required: 'Please, enter the duration'
    },
    date:{
        type: Date,
        default: Date.now
    }
});

const Cardio = mongoose.model('cardio', cardioSchema);

module.exports = Cardio;