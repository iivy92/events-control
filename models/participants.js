const mongoose = require("mongoose")

const { Schema } = mongoose

const participamtsSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    picture_url: {
        type: String,
    },
    },
    { timestamps: true }
)

const Participants = mongoose.model("Participants", participamtsSchema)

module.exports = {
    Participants,
    participamtsSchema
}
