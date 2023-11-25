const Sequelize = require('sequelize')
const pkg = require('../../package.json')

// *** if database requires password
if (!process.env.DATABASE_URL && process.env.DATABASE_PASSWORD) {
  process.env.DATABASE_URL = `${process.env.DATABASE_TYPE}://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`
}

// *** create Sequelize instance with connection URI
const db = new Sequelize(process.env.DATABASE_URL || `postgres://localhost:5432/${pkg.name}`, {
  logging: false // unless you like the logs
  // ...and there are many other options you may want to play with
  // logging: (...msg) => console.log(msg) // displays all log function call parameters
})

module.exports = db
