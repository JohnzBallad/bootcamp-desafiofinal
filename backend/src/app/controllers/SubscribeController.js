const { Meetup, Subscriber, User } = require('../models')

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
}

module.exports = new SubscribeController()
