const { Preference, Meetup } = require('../models')
const {
  Op: { eq, iLike, or, notIn },
  literal
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

  async filterByPreferences (req, res) {
    const { value: preferences } = req.query

    if (!preferences) {
      return res.status(400).json({ error: 'Preferences not provided' })
    }

    const prefs = preferences.split(',')

    const filtered = {}

    prefs.map(pref => {
      switch (pref) {
        case 'frontend': {
          return (filtered.frontend = {
            [eq]: true
          })
        }
        case 'backend': {
          return (filtered.backend = { [eq]: true })
        }
        case 'mobile': {
          return (filtered.mobile = { [eq]: true })
        }
        case 'devops': {
          return (filtered.devops = { [eq]: true })
        }
        case 'gestao': {
          return (filtered.gestao = { [eq]: true })
        }
        case 'marketing': {
          return (filtered.marketing = { [eq]: true })
        }
        default:
          return pref
      }
    })

    const meetups = await Meetup.findAll({
      include: [
        {
          model: Preference,
          where: {
            [or]: filtered
          }
        }
      ],
      where: {
        id: {
          [notIn]: literal(`(SELECT meetup_id
            FROM subscribers
              INNER JOIN users ON (subscribers.user_id = users.id
              AND users.id = ${req.userId}))`)
        }
      }
    })

    return res.json(meetups)
  }
}

module.exports = new MeetupController()
