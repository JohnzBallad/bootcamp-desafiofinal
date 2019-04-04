const Mail = require('../services/Mail')

class MeetupSubscription {
  get key () {
    return 'MeetupSubscription'
  }

  async handle (job, done) {
    const { meetup, user } = job.data

    await Mail.sendMail({
      from: '"Jonathan Galdino" <johnzballad@gmail.com>',
      to: user.email,
      subject: `Você se inscreveu no meetup ${meetup.title}`,
      template: 'meetup',
      context: { user, meetup }
    })

    return done()
  }
}

module.exports = new MeetupSubscription()
