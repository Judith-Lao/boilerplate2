const Router = require('express').Router()

Router.get('/', (req, res, next) => {
  res.send('this is my /pmhas')
})

module.exports = Router
