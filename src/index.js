const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  return res.sendFile(__dirname + "/html/index.html");
})

app.get("/about", (req, res) => {
  return res.sendFile(__dirname + "/html/about.html")
})

app.listen(PORT, () => {
  console.log("Server running: http://localhost:3000");
})
