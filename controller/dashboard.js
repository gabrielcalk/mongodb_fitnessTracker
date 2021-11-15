const dashRouter = require('express').Router()
const path = require('path')

dashRouter.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public', '/html', 'stats.html'))
})

module.exports = dashRouter
