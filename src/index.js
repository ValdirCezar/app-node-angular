const express = require('express');
const Todo = require('./models/Todo')
const cors = require('cors')

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.post('/todos', (req, res) => {

  if (req.body.tittle.length < 3 || req.body.description.length < 3) {
    return res.status(400).json({ message: "The minimum length for fields should be 3 characters" })
  } else {
    Todo.create({
      tittle: req.body.tittle,
      description: req.body.description,
      userId: req.body.userId
    }).then(() => {
      return res.json({ message: "Todo successful created" })
    }).catch(() => {
      return res.status(500).json({ message: `Internal server error` })
    });
  }

})

app.get("/todos", (req, res) => {
  Todo.findAll().then((todos) => {
    return res.json(todos)
  })
})

app.delete("/todos/:id", (req, res) => {
  Todo.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    return res.json({ message: "Deleted" })
  }).catch((err) => {
    return res.json({ message: "Error" })
  })
})

// Start server
app.listen(PORT, () => {
  console.log("\nServer running: http://localhost:3000");
})
