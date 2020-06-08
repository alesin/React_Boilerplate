const Sequelize = require('sequelize')
const db = require('./database')

const User = db.define('user', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'default_user.png'
    },
    name: {
        type: Sequelize.STRING
    }
})

module.exports = User
