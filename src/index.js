const express = require('express');
const Todo = require('./models/Todo')
const cors = require('cors')

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.post('/todos', (req, res) => {

  Todo.create({
    tittle: req.body.tittle,
    description: req.body.description,
    userId: req.body.userId
  }).then(() => {
    return res.json({ message: "Todo successful created" })
  }).catch((err) => {
    return res.json({ message: `Error create Todo ${err}` })
  });
})

app.get("/todos", (req, res) => {
  Todo.findAll().then((todos) => {
    return res.json(todos)
  })
})

// Start server
app.listen(PORT, () => {
  console.log("\nServer running: http://localhost:3000");
})
