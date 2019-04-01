module.exports = (sequelize, DataTypes) => {
  const Preference = sequelize.define('Preference', {
    frontend: DataTypes.BOOLEAN,
    backend: DataTypes.BOOLEAN,
    mobile: DataTypes.BOOLEAN,
    devops: DataTypes.BOOLEAN,
    gestao: DataTypes.BOOLEAN,
    marketing: DataTypes.BOOLEAN
  })

  Preference.associate = models => {
    Preference.belongsTo(models.User, { foreignKey: 'user_id' })
  }

  return Preference
}
