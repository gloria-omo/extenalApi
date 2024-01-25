const poemModel = require('../models/model.js');
const axios = require('axios');
const exAPI = 'https://jsonplaceholder.typicode.com/todos'

exports.externalData = async (req, res) =>{
    try{
        const response = await axios.get(exAPI)
        const extractData = response.data;

        for(const externalObject of extractData){
            const poemData = new poemModel({
                title: externalObject.title,
                isCompleted: externalObject.completed
            })

            poemData.save();
        }

        res.status(200).json({
            message: `Sent successfully`,
            extractData
        }) 

    }catch(err){
        res.status(500).json(err.message)
    }
}

exports.getAll = async (req, res)=>{
    try{
        const newData = await poemModel.find()
        if(newData.length === 0){
            res.status(404).json({
                message: `This database is empty`
            })
        }
        res.status(200).json({
            message: `There are ${newData.length} poems on this list`,
            newData
        })
    }catch(err){
        res.status(500).json({
            message: `Error getting data`,
            Error: err.message
        })
    }
}

exports.getOne = async (req, res) =>{
    try{
        const id = req.params.id
        const onePoem = await poemModel.findById(id)
        if(!onePoem){
            res.status(404).json({
                message: `Poem with this id not found`
            })
        }
        else{
        res.status(200).json({
            message: `Poem with id: '${onePoem.id}' has be fetched.`,
            onePoem
        })
    }
    }catch(err){
        res.status(500).json({
            message: `error getting poem`,
            Error: err.message
        })
    }
}

exports.update = async (req, res)=>{
    try{
        const id = req.params.id
        const data = {
            title: req.body.title,
            isCompleted: req.body.isCompleted
        }
        const update = await poemModel.findByIdAndUpdate(id, data, {new:true})

        res.status(200).json({
            message: `Poem with id: '${update.id}' has been updated successfully`,
            update
        })

    }catch(err){
        res.status(500).json({
            message:`Unable to update this file.`,
            Error: err.message
        })
    }
}

exports.deleteOne = async (req, res) =>{
    try{
        const id = req.params.id
        const deleteOne = await poemModel.findByIdAndDelete(id)

        res.status(200).json({
            message: `You have successfully deleted poem with id: '${deleteOne.id}'`,
            deleteOne
        })
    }catch(err){
        res.status(500).json({
            message:`Cannot delete this poem`,
            Error: err.message
        })
    }
} 

exports.home = async (req, res)=>{
    res.send(`Welcome here`)  
}  