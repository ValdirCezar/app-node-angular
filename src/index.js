const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ message: "App works!" })
})

  .listen(PORT, () => {
    console.log("\nServer running: http://localhost:3000");
  })
