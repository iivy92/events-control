const mongoose = require("mongoose")
const { participamtsSchema } = require("./participants")

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
    participants: {
        type: [participamtsSchema]
    },
    }, 
    { timestamps: true }
)

const Events = mongoose.model("Events", eventsSchema)

module.exports = {
    Events,
    eventsSchema
}