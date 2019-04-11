//controller has all of the req res functions

const { allDecks } = require("./data");

let id = 4;

module.exports = {
  getData: function (req, res) {
    res.status(200).json(allDecks);
  },

  addData: (req, res) => {
    allDecks.push({ ...req.body, id })
    id++;
    res.status(200).json(allDecks)
  },

  putData: (req, res) => {
    //Change update button so it brings up an input field and a submit button
    //When you hit the submit button it sends the text in the field on the body as well as the id of the board
    //You would use findIndex to find the position of the cooresponding board in the array
    //You would use that index to update the title property
    //After that send back the whole array.
    allDecks[index].title = req.body.title;
    allDecks.push(req.body)
    res.status(200).json(allDecks)
  },
  deleteData: (req, res) => {
    const index = allDecks.findIndex(deck => deck.id === +req.params.id)
    allDecks.splice(index, 1)
    res.status(200).json(allDecks)
  }
};
