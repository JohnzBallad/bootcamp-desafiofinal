const express = require('express')

const routes = express.Router()

/* Middlewares */
const authMiddleware = require('./app/middlewares/auth')

/* Controllers */
const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')
const PreferenceController = require('./app/controllers/PreferenceController')

routes.post('/signup', UserController.store)

routes.post('/sessions', SessionController.store)

routes.use(authMiddleware)

routes.post('/preferences', PreferenceController.store)

module.exports = routes
