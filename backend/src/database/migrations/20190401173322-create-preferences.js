'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('preferences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      frontend: {
        allowNull: true,
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      backend: {
        allowNull: true,
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      mobile: {
        allowNull: true,
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      devops: {
        allowNull: true,
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      gestao: {
        allowNull: true,
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      marketing: {
        allowNull: true,
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('preferences')
  }
}
