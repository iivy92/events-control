const mongoose = require("mongoose")
const { usersSchema } = require("./Users")

const { Schema } = mongoose

const eventsSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    picture_url: {
        type: String,
    },
    Users: {
        type: [usersSchema]
    },
    }, 
    { timestamps: true }
)

if (mongoose.modelNames().includes('Events')) {
    mongoose.deleteModel('Events')
}

const Events = mongoose.model("Events", eventsSchema)

module.exports = {
    Events,
    eventsSchema
}