const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.POSTGRES_URI, {
  logging: console.log
})

try {
  sequelize.authenticate()
  console.log('Connection to GroupomaniaDB has been established successfully.')
} catch (error) {
  console.error('Unable to connect to the database:', error)
}

(async () => {
  await sequelize.sync()
  console.log('synced')
})()

module.exports = sequelize
