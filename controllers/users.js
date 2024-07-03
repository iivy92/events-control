const { Users: usersModel, usersSchema } = require("../models/users")
const cpfCnpjValidator = require('cpf-cnpj-validator');
const validator  = require("validator")

const usersController = {
    
    create: async(req, res) => {
        try {
            const user = {
                cpf: req.body.cpf,
                name: req.body.name,
                email: req.body.email 
            }
            
            const user_exists = await usersModel.findOne({cpf: user.cpf})

            if ( user_exists ) {
                res.status(400).json({msg: "User already exist"})
                return
            }

            if ( !cpfCnpjValidator.cpf.isValid(user.cpf) ) {
                res.status(422).json({msg: "Invalid CPF number"})
                return
            }

            if ( !validator.isEmail(user.email) ) {
                res.status(422).json({msg: "Invalid email"})
                return
            }


            const response = await usersModel.create(user)
            res.status(201).json({response, msg: "User created successfully"})

        } catch (error) {
            console.log(error)
        }
    },

    getAll: async(req, res) => {
        try {
            const response = await usersModel.find()
            res.json(response)
            
        } catch (error) {
            console.log(error)
        }
    },

}

module.exports = usersController