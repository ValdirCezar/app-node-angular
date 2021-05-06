const db = require('../../database/db');

const Todo = db.sequelize.define('todos', {
  tittle: {
    type: db.Sequelize.STRING
  },
  description: {
    type: db.Sequelize.STRING
  },
  user: {
    type: db.Sequelize.INTEGER
  }
})

//Todo.sync({ force: true })

module.exports = Todo