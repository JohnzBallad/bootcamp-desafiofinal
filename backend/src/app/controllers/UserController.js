const { User, Preference } = require('../models')

class UserController {
  async store (req, res) {
    const { name, email, password } = req.body

    if (await User.findOne({ where: { email } })) {
      return res.status(400).json({ error: 'User already exists' })
    }

    const user = await User.create({ name, email, password })

    return res.json(user)
  }

  async update (req, res) {
    const {
      name,
      password,
      preferences: { frontend, backend, mobile, devops, gestao, marketing }
    } = req.body

    const user = await User.findOne({ where: { id: req.userId } })

    user.name = name
    user.password = password
    await user.save()

    const newPreference = await Preference.update(
      {
        frontend,
        backend,
        mobile,
        devops,
        marketing,
        gestao
      },
      {
        where: { id: user.preference_id }
      }
    )

    return res.json({ user, udapted: newPreference })
  }
}

module.exports = new UserController()
