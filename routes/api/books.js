const router = require("express").Router();
const booksController = require("../../controllers/booksControllers");

router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

router.route('/search')
  .get(booksController.search)

// Matches with "/api/books/:id"
router
  .route("/:id")
  .delete(booksController.remove);

module.exports = router;

