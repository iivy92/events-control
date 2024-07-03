const express = require("express")
const cors = require("cors")
const database_connection = require("./databases/connection")
const routes = require("./routes/router")

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api", routes)

database_connection()

app.listen(8000, function(){
    console.log("The service is up and runnning!")
})