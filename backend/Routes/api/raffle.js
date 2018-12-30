const express = require("express");
const router = express.Router();

//Load raffle model
const Raffle = require("../../models/raffle");

// @route   POST api/raffle/add
// @desc    Add a raffle
// @access  private
router.post("/add", (req, res) => {
  console.log("raffle: ", req.body);
  const newRaffle = new Raffle({
    name: req.body.name,
    image: req.body.image,
    amount: req.body.amount,
    time: req.body.time,
    entries: req.body.entries
  });

  newRaffle
    .save()
    .then(raffle => res.json(raffle))
    .catch(err => console.log(err));
});

module.exports = router;
