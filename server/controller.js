//controller has all of the req res functions

const { allDecks } = require("./data");

module.exports = {
  getData: function (req, res) {
    res.status(200).json(allDecks);
  },

  addData: (req, res) => {
    console.log(req.body)
    allDecks.push(req.body)
    res.status(200).json(allDecks)
  },

  updateData: (req, res) => {
    console.log(req.body)
    allDecks.push(req.body)
    res.status(200).json(allDecks)
  },
  deleteData: (req, res) => {
    console.log(req.body)
    allDecks.delete(req.body)
    res.status(200).json(allDecks)
  }
};
