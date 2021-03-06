module.exports = (sequelize, DataTypes) => {
  const Meetup = sequelize.define('Meetup', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    subscribers: DataTypes.INTEGER,
    cover: DataTypes.STRING,
    location: DataTypes.STRING,
    when: DataTypes.DATE,
    preference_id: DataTypes.INTEGER
  })

  Meetup.associate = models => {
    Meetup.belongsToMany(models.User, {
      through: models.Subscriber,
      foreignKey: 'meetup_id'
    })
    Meetup.belongsTo(models.Preference, { foreignKey: 'preference_id' })
  }

  return Meetup
}
