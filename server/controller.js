//controller has all of the req res functions

const { allDecks } = require("./data");

module.exports = {
  getData: function(req, res) {
    res.status(200).json(allDecks);
  }
};
