const Sequelize = require('sequelize');

// DB connection
const sequelize = new Sequelize('todo', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}