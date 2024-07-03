const router = require("express").Router()

const usersController = require("../controllers/users")

router.route("/users").post((req, res) => usersController.create(req, res))
router.route("/users").get((req, res) => usersController.getAll(req, res))
router.route("/users/:cpf").get((req, res) => usersController.get(req, res))
router.route("/users/:cpf").delete((req, res) => usersController.delete(req, res))


module.exports = router