const dashRouter = require('express').Router()
const path = require('path')

/**
 * @router /stats
 * rendering the dashboard page
 */
dashRouter.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public', '/html', 'stats.html'))
})

/**
 * @exports /stats - ROUTER
 */
module.exports = dashRouter
