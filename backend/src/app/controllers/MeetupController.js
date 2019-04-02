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
    const { titulo, unsubscribed } = req.query

    const filter = {
      where: {}
    }

    if (titulo) {
      filter.where.title = { [iLike]: `%${titulo}%` }
    }

    if (unsubscribed) {
      filter.include = [
        {
          model: User,
          through: {
            where: {
              // meetup_id: { [eq]: { [col]: 'Meetup.id' } },
              user_id: { [ne]: req.userId }
            }
          }
        }
      ]
    }

    const meetups = await Meetup.findAll(filter)

    return res.json(meetups)
  }
}

module.exports = new MeetupController()
