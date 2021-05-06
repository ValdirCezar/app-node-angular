const express = require('express');
const Sequelize = require('sequelize');

const app = express();
const PORT = 3000;

app.use(express.json());

// DB connection
const sequelize = new Sequelize('test', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

app.get("/todo", (req, res) => {
  req.body
  return 
})

// Start server
app.listen(PORT, () => {
  console.log("\nServer running: http://localhost:3000");
})
