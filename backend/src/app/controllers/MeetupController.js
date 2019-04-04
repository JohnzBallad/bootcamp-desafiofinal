const { Preference, Meetup, User } = require('../models')
const moment = require('moment')
const {
  Op: { eq, iLike, or, notIn },
  literal
} = require('sequelize')

class MeetupController {
  async store (req, res) {
    const { title, description, location, preferences, when } = req.body

    if (!req.file) {
      return res.status(400).json({ error: 'You must provide a cover' })
    }

    const { filename: cover } = req.file

    const preference = await Preference.create(JSON.parse(preferences))

    const meetup = await Meetup.create({
      title,
      description,
      location,
      cover,
      when: moment(when).format(),
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
    // const { value: preferences } = req.query

    // if (!preferences) {
    //   return res.status(400).json({ error: 'Preferences not provided' })
    // }

    // const prefs = preferences.split(',')

    const user = await User.findOne({
      where: {
        id: { [eq]: req.userId }
      },
      include: {
        model: Preference,
        attributes: [
          'frontend',
          'backend',
          'mobile',
          'devops',
          'gestao',
          'marketing'
        ]
      }
    })

    const { Preference: prefs } = user

    const filter = {}

    if (prefs.backend) {
      filter.backend = {
        [eq]: true
      }
    }

    if (prefs.frontend) {
      filter.frontend = {
        [eq]: true
      }
    }

    if (prefs.mobile) {
      filter.mobile = {
        [eq]: true
      }
    }

    if (prefs.gestao) {
      filter.gestao = {
        [eq]: true
      }
    }

    if (prefs.marketing) {
      filter.marketing = {
        [eq]: true
      }
    }

    const meetups = await Meetup.findAll({
      include: [
        {
          model: Preference,
          where: {
            [or]: filter
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
    // prefs.map(pref => {
    //   switch (pref) {
    //     case 'frontend': {
    //       return (filter.frontend = {
    //         [eq]: true
    //       })
    //     }
    //     case 'backend': {
    //       return (filter.backend = { [eq]: true })
    //     }
    //     case 'mobile': {
    //       return (filter.mobile = { [eq]: true })
    //     }
    //     case 'devops': {
    //       return (filter.devops = { [eq]: true })
    //     }
    //     case 'gestao': {
    //       return (filter.gestao = { [eq]: true })
    //     }
    //     case 'marketing': {
    //       return (filter.marketing = { [eq]: true })
    //     }
    //     default:
    //       return pref
    //   }
    // })

    // const meetups = await Meetup.findAll({
    //   include: [
    //     {
    //       model: Preference,
    //       where: {
    //         [or]: filter
    //       }
    //     }
    //   ],
    //   where: {
    //     id: {
    //       [notIn]: literal(`(SELECT meetup_id
    //         FROM subscribers
    //           INNER JOIN users ON (subscribers.user_id = users.id
    //           AND users.id = ${req.userId}))`)
    //     }
    //   }
    // })
  }

  doSomething () {
    console.log('something')
  }
}

module.exports = new MeetupController()
