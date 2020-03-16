const Sequelize = require('sequelize')
const db = require('../db')

const Event = db.define('event', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  status: {
    type: Sequelize.ENUM(
      'ongoing',
      'remote',
      'pending',
      'postponed',
      'cancelled'
    ),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  link: {
    type: Sequelize.STRING
  }
})

module.exports = Event
