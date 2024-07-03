const { Events: eventsModel } = require("../models/events")

const eventsController = {

    create: async(req, res) => {
        try {

            const event = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                picture_url: req.body.picture_url
            }

            const response = await eventsModel.create(event)
            res.status(201).json({response, msg: "Event created successfully"})
            
        } catch (error) {
            console.log(error)
            
        }
    },

    getAll: async(req, res) => {
        try {
            const response = await eventsModel.find()
            res.json(response)
            
        } catch (error) {
            console.log(error)
        }
    },

    get: async(req, res) => {
        try {
            const id = req.params.id
            const response = await eventsModel.findById(id)

            if ( !response ){
                res.status(404).json({msg: "Event not found"})
                return
            }

            res.json(response)
        } catch (error) {
            console.log(error)
            
        }
    },

    delete: async(req, res) => {
        try {
            const id = req.params.id
            const response = await eventsModel.findById(id)

            if ( !response ){
                res.status(404).json({msg: "Event not found"})
                return
            }

            deletedEvent = await eventsModel.findByIdAndDelete(id)

            res
                .status(200)
                .json({deletedEvent, msg: "Event deleted successfully"})

        } catch (error) {
            console.log(error)
        }
    },

    update: async(req, res) => {
        try {

            const id =  req.params.id

            const event = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                picture_url: req.body.picture_url
            }

            updatedEvent = await eventsModel.findByIdAndUpdate(id, event)

            if ( !updatedEvent ){
                res.status(404).json({msg: "Event not found"})
                return
            }

            res
                .status(200)
                .json({updatedEvent, msg: "Event updated successfully"}) 
            
        } catch (error) {
            console.log(error)
            
        }

    }
};

module.exports = eventsController