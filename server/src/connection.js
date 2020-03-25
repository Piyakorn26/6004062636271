const mongoose = require("mongoose");

const Numer = require("./Numer.model");

const connection = "mongodb+srv://admin:dew28433@piyakorn0-syzzt.mongodb.net/numer";

const connectDb = () => {
  return mongoose.connect(connection);
};

module.exports = connectDb;
