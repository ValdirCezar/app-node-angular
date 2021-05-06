const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

sequelize.authenticate().then(() => {
  console.log("Database conected!")
}).catch((error) => {
  console.log("Database error conect - " + error);
});