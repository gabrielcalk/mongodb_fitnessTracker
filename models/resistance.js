const mongoose = require('mongoose');
const {Schema} = mongoose;

const resistanceSchema = new Schema({
    type: String,
    name:{
        type: String,
        trim: true,
        required: 'Please, enter the name of the exercise'
    },
    reps:{
        type: Number,
        required: 'Please, enter the reps'
    },
    sets:{
        type: Number,
        required: 'Please, enter the sets'
    },
    duration:{
        type: Number,
        required: 'Please, enter the duration'
    },
    weight:{
        type: Number,
        required: 'Please, enter the weight'
    },
    date:{
        type: Date,
        default: Date.now
    },
});

const resistance = mongoose.model('resistance', resistanceSchema);

module.exports = resistance;