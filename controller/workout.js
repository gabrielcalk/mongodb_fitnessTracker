const exerciseRouter = require('express').Router();
const path = require('path');

/**
 * @router /exercise
 */
exerciseRouter.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public', '/html', 'exercise.html'))
})

/**
 * @exports /exercise - ROUTER
 */
module.exports = exerciseRouter