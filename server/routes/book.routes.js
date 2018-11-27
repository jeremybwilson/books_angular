const BookController = require('../controllers/book.controller');
const router = require('express').Router();

module.exports = router
  //routes and controllers
  .get('/', BookController.index)

  // create book route
  .post('/', BookController.create)

  // show all books route
  .get('/:book_id', BookController.show)

  // update individual book route
  .put('/:_id', BookController.update)

  // delete book route
  .delete('/:_id', BookController.delete)
