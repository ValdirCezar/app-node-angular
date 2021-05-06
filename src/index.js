const express = require('express');
const Todo = require('./models/Todo')

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/todos', (req, res) => {
  Todo.create({
    tittle: req.body.tittle,
    describe: req.body.describe,
    userId: req.body.userId
  }).then(() => {
    return res.json({ message: "Todo succesful created" })
  }).catch((err) => {
    return res.json({ message: `Error create Todo ${err}` })
  });
})

// Start server
app.listen(PORT, () => {
  console.log("\nServer running: http://localhost:3000");
})
