const express = require('express')

const routes = express.Router()

/* Controllers */
const UserController = require('./app/controllers/UserController')

routes.post('/signup', UserController.store)

module.exports = routes
