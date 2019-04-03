const { Preference, Meetup } = require('../models')
const {
  Op: { eq, iLike }
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
    const meetups = await Meetup.findAll({
      include: [Preference]
    })

    return res.json(meetups)
  }

  async filterByTitle (req, res) {
    const { value } = req.query

    if (!value) {
      return res.status(400).json({ error: 'Filter value not provided' })
    }

    const meetups = await Meetup.findAll({
      where: { title: { [iLike]: `%${value}%` } },
      include: [Preference]
    })

    return res.json(meetups)
  }
}

module.exports = new MeetupController()
