const { Users: usersSchema } = require("../models/users")
const cpf = require("cpf-cnpj-validator")

const usersController = {
    create: async(req, res) => {
        try {
            const user = {
                cpf: req.body.cpf,
                name: req.body.name,
                email: req.body.email 
            }

            if ( !cpf.validator(user.cpf) ) {
                res.status(422).json({msg: "Invalid CPF number"})
                return
            }

        } catch (error) {
            console.log(error)
        }
    }

}