const express = require('express');
const Todo = require('./models/Todo')
const cors = require('cors')

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.post('/todos', (req, res) => {
    const tittle = req.body.tittle
    const describe = req.body.describe
    const userId = req.body.userId
  Todo.create({
    tittle: tittle,
    describe: describe,
    userId: userId
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
