const Router = require('express').Router()

Router.use('/chapters', require('./chapters'))
Router.use('/pmhas', require('./pmhas'))

Router.use((req, res, next) => {
  const err = new Error('API route not found')
  err.status = 404
  next(err)
})

module.exports = Router
