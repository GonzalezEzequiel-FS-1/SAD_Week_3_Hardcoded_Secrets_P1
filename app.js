// Importing Express
const express = require("express");

// Creating an Express Intance as "app"
const app = express();

// Secret One the Port
const PORT = 3000;

// Secret Two the SECRET!
//
const API_KEY = "doNotHardCodeMe#BadPractice";

// Exposing Secret Two via accesing http://localhost:3000/secret
app.get("/secret", (req, res) => {
  return res.status(200).json({
    success: true,
    message:
      "Here is a hard coded API key, this is meant for educational purposes only.",
    API_KEY,
  });
});

// Eposing secret One via console.log in the terminal
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
