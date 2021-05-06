const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ message: "App works!" })
})

app.listen(PORT, () => {
  console.log("Server running: http://localhost:3000");
})
