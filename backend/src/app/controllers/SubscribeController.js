const { Meetup, Subscriber, Preference, User } = require('../models')
const MeetupSubscription = require('../jobs/MeetupSubscription')
const Queue = require('../services/Queue')
const Mail = require('../services/Mail')
const moment = require('moment')

const {
  Op: { gte, notIn, in: In },
  literal
} = require('sequelize')

class SubscribeController {
  async store (req, res) {
    const { meetupId } = req.params

    const meetup = await Meetup.findOne({ where: { id: meetupId } })

    if (!meetup) {
      return res.status(400).json({ error: 'This meetup does not exist.' })
    }

    if (
      await Subscriber.findOne({
        where: { user_id: req.userId, meetup_id: meetup.id }
      })
    ) {
      return res
        .status(400)
        .json({ error: 'You are already subscribed to this meetup' })
    }

    await Subscriber.create({
      meetup_id: meetupId,
      user_id: req.userId
    })

    meetup.subscribers += 1
    await meetup.save()

    const user = await User.findByPk(req.userId)

    Queue.create(MeetupSubscription.key, {
      meetup,
      user
    }).save()

    return res.send()
  }

  async listNotEnrolledMeetups (req, res) {
    const meetups = await Meetup.findAll({
      include: [Preference],
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

  async listEnrolledAndNext (req, res) {
    const today = moment()

    const meetups = await Meetup.findAll({
      include: [Preference],
      where: {
        id: {
          [In]: literal(`(SELECT meetup_id
                              FROM subscribers
                        INNER JOIN users ON (subscribers.user_id = users.id
                               AND users.id = ${req.userId}))`)
        },
        when: {
          [gte]: today
        }
      }
    })

    return res.json(meetups)
  }
}

module.exports = new SubscribeController()
