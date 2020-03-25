const express = require("express");
const app = express();
const connectDb = require("./src/connection");
const Numer = require("./src/Numer.model");

const PORT = 5000;

app.get("/numer", async (req, res) => {
  const numers = await Numer.find();

  res.json(numers);
});

app.post("/numer-create", async (req, res) => {
  const numer = new Numer(req.body);

  await numer.save().then(() => console.log("Numer created"));

  res.send("Numer created \n");
});

app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);

  connectDb().then(() => {
    console.log("MongoDb connected");
  });
});
