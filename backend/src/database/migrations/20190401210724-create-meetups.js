'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('meetups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      preference_id: {
        type: Sequelize.INTEGER,
        reference: { model: 'preferences', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cover: {
        allowNull: true,
        type: Sequelize.STRING
      },
      subscribers: {
        allowNull: true,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      location: {
        allowNull: false,
        type: Sequelize.STRING
      },
      when: {
        allowNull: false,
        type: Sequelize.DATE
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
    return queryInterface.dropTable('meetups')
  }
}
