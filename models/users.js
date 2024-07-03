const mongoose = require("mongoose")

const { Schema } = mongoose

const usersSchema = new Schema ({
    cpf: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    bio: {
        type: String,
    },
    picture_url: {
        type: String,
    },
    },
    { timestamps: true }
)

const Users = mongoose.model("Users", usersSchema)

module.exports = {
    Users,
    usersSchema
}
