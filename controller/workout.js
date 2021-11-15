const exerciseRouter = require('express').Router();
const path = require('path');

exerciseRouter.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public', '/html', 'exercise.html'))
})

module.exports = exerciseRouter