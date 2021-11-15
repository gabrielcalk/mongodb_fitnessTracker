const homeRouter = require('express').Router();
const path = require('path');

homeRouter.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public', '/html', 'index.html'))
})

module.exports = homeRouter