const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Bienvenue chez Express JS"
  });
});

app.listen(3000, () => {
  console.log("Le serveur tourne sur le port 3000");
});