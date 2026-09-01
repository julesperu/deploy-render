const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: process.env.FRONT_URL,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Bienvenue chez Express JS",
  });
});

app.listen(PORT, () => {
  console.log(`Le serveur tourne sur le port ${PORT}`);
});