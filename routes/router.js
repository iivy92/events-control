const router  = require("express").Router()
const eventsRouter = require("./events")
const usersRouter = require("./users")


router.use("/", eventsRouter)
router.use("/", usersRouter)

module.exports = router