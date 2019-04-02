const express = require('express')

const routes = express.Router()

/* Middlewares */
const authMiddleware = require('./app/middlewares/auth')

/* Controllers */
const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')
const PreferenceController = require('./app/controllers/PreferenceController')
const MeetupController = require('./app/controllers/MeetupController')
const SubscribeController = require('./app/controllers/SubscribeController')

routes.post('/signup', UserController.store)
routes.post('/sessions', SessionController.store)

routes.use(authMiddleware)

routes.post('/preferences', PreferenceController.store)
routes.put('/profile', UserController.update)

routes.post('/meetups', MeetupController.store)
routes.get('/meetups', MeetupController.index)

routes.post('/meetups/:meetupId/subscribe', SubscribeController.store)

module.exports = routes
