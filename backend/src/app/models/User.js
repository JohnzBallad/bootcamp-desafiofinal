const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.VIRTUAL,
      password_hash: DataTypes.STRING,
      first_time: DataTypes.BOOLEAN,
      preference_id: DataTypes.INTEGER
    },
    {
      hooks: {
        beforeSave: async user => {
          if (user.password) {
            user.password_hash = await bcrypt.hash(user.password, 8)
          }
        }
      }
    }
  )

  User.associate = models => {
    User.belongsToMany(models.Meetup, {
      through: models.Subscriber,
      foreignKey: 'user_id'
    })

    User.belongsTo(models.Preference, { foreignKey: 'preference_id' })
  }

  User.prototype.checkPassword = function (password) {
    return bcrypt.compare(password, this.password_hash)
  }

  User.prototype.generateToken = function ({ id }) {
    return jwt.sign({ id }, authConfig.secret, {
      expiresIn: authConfig.ttl
    })
  }

  User.prototype.toJSON = function () {
    var values = Object.assign({}, this.get())

    delete values.password
    return values
  }

  return User
}
