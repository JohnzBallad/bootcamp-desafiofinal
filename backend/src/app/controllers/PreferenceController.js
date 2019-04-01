const { Preference, User } = require('../models')

class PreferenceController {
  async store (req, res) {
    const { frontend, backend, mobile, devops, marketing, gestao } = req.body

    const user = await User.findOne({ where: { id: req.userId } })

    if (!user.first_time) {
      console.log(user.first_time)
      return res.status(401).json({
        error: 'You are not allowed to change prefences from this route.'
      })
    }

    const preference = await Preference.create({
      user_id: req.userId,
      frontend,
      backend,
      mobile,
      devops,
      marketing,
      gestao
    })

    return res.json(preference)
  }
}

module.exports = new PreferenceController()
