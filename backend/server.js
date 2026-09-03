const express = require("express");
const fs = require("fs");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const app = express();

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 20000,
  message: "Too many requests. Try again later."
});

app.use(cors());
app.use(limiter);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server running");
});


// Portfolio Data
const data = require("./data.json");

app.get("/portfolio-data", (req, res) => {
  res.json(data);
});


// Contact Form
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send("All fields required");
  }

  const contactData = `
NAME: ${name}
EMAIL: ${email}
MESSAGE: ${message}
------------------------
`;

  fs.appendFile("contacts.txt", contactData, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error");
    }

    res.send("Message received");
  });
});


app.listen(8000, () => {
  console.log("Server started on 8000");
});