var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var RaffleSchema = new Schema({
  name: String,
  image: String,
  amount: String,
  time: String,
  entries: String
});

module.exports = mongoose.model("Raffle", RaffleSchema);
