const mongoose = require("mongoose")

async function main() {
    try {
        mongoose.set("strictQuery", true)

        await mongoose.connect(
            "mongodb+srv://pedrosantana:44jEi1L1vFb29Yw7@cluster0.oqkhsut.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        )
        
        console.log("Database connected")

    } catch (error) {
        console.log(`Erro: ${error}`)

    }
}

module.exports = main
