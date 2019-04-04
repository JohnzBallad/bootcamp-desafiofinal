const express = require('express')
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)

const routes = express.Router()

/* Middlewares */
const authMiddleware = require('./app/middlewares/auth')

/* Controllers */
const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')
const PreferenceController = require('./app/controllers/PreferenceController')
const MeetupController = require('./app/controllers/MeetupController')
const SubscribeController = require('./app/controllers/SubscribeController')
const FileController = require('./app/controllers/FileController')

routes.get('/files/:file', FileController.show)

routes.post('/signup', UserController.store)
routes.post('/sessions', SessionController.store)

routes.use(authMiddleware)

routes.post('/welcome', PreferenceController.store)
routes.put('/profile', UserController.update)

routes.post('/meetups', upload.single('cover'), MeetupController.store)

routes.get('/meetups', MeetupController.index)
routes.get('/meetups/enrolled/next', SubscribeController.listEnrolledAndNext)

routes.get('/meetups/filter/title', MeetupController.filterByTitle)
routes.get('/meetups/filter/preferences', MeetupController.filterByPreferences)

routes.post('/meetups/:meetupId/subscribe', SubscribeController.store)

routes.get('/meetups/notenrolled', SubscribeController.listNotEnrolledMeetups)

module.exports = routes
