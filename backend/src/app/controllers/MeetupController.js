const { Preference, Meetup, User } = require('../models')
const {
  Op: { ne, eq, col, iLike }
} = require('sequelize')

class MeetupController {
  async store (req, res) {
    const { title, description, location, preferences } = req.body

    const preference = await Preference.create(preferences)

    const meetup = await Meetup.create({
      title,
      description,
      location,
      preference_id: preference.id
    })

    return res.json(meetup)
  }

  async index (req, res) {
    const { titulo } = req.query

    const filter = {}

    if (titulo) {
      filter.where.title = { [iLike]: `%${titulo}%` }
    }

    const meetups = await Meetup.findAll(filter)

    return res.json(meetups)
  }
}

module.exports = new MeetupController()
