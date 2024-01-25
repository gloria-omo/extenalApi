const mongoose = require('mongoose')

const poemSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, 'the title is required'],
        unique: true},

    
    isCompleted:{
        type: Boolean,
        required:[true, 'enter title']}
})

const poemModel = mongoose.model('poem', poemSchema)

module.exports = poemModel