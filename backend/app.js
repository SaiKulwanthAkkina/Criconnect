const express = require("express");

const app = express();

app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.status(200).send("Backend OK");
});

// API status
app.get("/api/status", (req, res) => {
  res.json({
    success: true,
    message: "API Working",
  });
});

module.exports = app;