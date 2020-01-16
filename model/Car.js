const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    detail: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    price: {
        type: Number,
        required: true
    },
    preorders: {
        type: Array,
        default: []
    }
})

module.exports = mongoose.model('Car', carSchema)