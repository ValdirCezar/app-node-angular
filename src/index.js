const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/todo", (req, res) => {
  req.body
  return 
})

// Start server
app.listen(PORT, () => {
  console.log("\nServer running: http://localhost:3000");
})
