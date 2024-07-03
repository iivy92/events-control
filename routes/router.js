const router  = require("express").Router()
const eventsRouter = require("./events")


router.use("/", eventsRouter)

module.exports = router