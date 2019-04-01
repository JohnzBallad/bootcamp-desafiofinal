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
      user_id: {
        type: Sequelize.INTEGER,
        reference: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      },
      frontend: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      backend: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      mobile: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      devops: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      gestao: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      marketing: {
        allowNull: false,
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
