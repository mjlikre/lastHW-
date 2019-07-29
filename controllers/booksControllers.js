const db = require("../models");
const axios = require("axios");
const yourAPIKey = 'AIzaSyBTRqldMdFsfV0W70hP36NdnMH7KMNKHuQ'



// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  search: function(req, res) {
      axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${req.body}&key=${yourAPIKey}`)
        .then(({ data: { results } }) => res.json(results))
        .catch(err => res.status(422).json(err));


  }
};