const { User } = require('../models')

class UserController {
  async store (req, res) {
    const { name, email, password } = req.body

    if (await User.findOne({ where: { email } })) {
      return res.status(400).json({ error: 'User already exists' })
    }

    const user = await User.create({ name, email, password })

    return res.json(user)
  }
}

module.exports = new UserController()
