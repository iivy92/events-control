const { Users: usersSchema } = require("../models/users")

const usersController = {
    create: async(req, res) => {
        try {
            const user = {
                cpf: req.body.cpf,
                name: req.body.name,
                email: req.body.email 
            }

        } catch (error) {
            console.log(error)
        }
    }

}