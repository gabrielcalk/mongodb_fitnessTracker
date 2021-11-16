const homeRouter = require('express').Router();
const path = require('path');

/**
 * @router /
 */
homeRouter.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public', '/html', 'index.html'))
})

/**
 * @exports / - ROUTER HOME
 */
module.exports = homeRouter