const { Preference, Meetup } = require('../models')

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
    const meetups = await Meetup.findAll()

    return res.json(meetups)
  }
}

module.exports = new MeetupController()
