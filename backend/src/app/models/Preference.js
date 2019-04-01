module.exports = (sequelize, DataTypes) => {
  const Preference = sequelize.define('Preference', {
    frontend: DataTypes.BOOLEAN,
    backend: DataTypes.BOOLEAN,
    mobile: DataTypes.BOOLEAN,
    devops: DataTypes.BOOLEAN,
    gestao: DataTypes.BOOLEAN,
    marketing: DataTypes.BOOLEAN
  })

  return Preference
}
