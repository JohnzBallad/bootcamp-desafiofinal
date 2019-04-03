const { Meetup, Subscriber, Preference } = require('../models')
const {
  Op: { iLike, notIn },
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

    const subscriber = await Subscriber.create({
      meetup_id: meetupId,
      user_id: req.userId
    })

    meetup.subscribers += 1
    await meetup.save()

    return res.json({ subscriber, meetup })
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
}

module.exports = new SubscribeController()
