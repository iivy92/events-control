const mongoose = require("mongoose")

const { Schema } = mongoose

const usersSchema = new Schema ({
    cpf: {
        type: String,
        required: true,
        unique: true
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


if (mongoose.modelNames().includes('Users')) {
    mongoose.deleteModel('Users')
}

const Users = mongoose.model("Users", usersSchema)

module.exports = {
    Users,
    usersSchema
}
