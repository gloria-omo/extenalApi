const express = require("express");

const router = express.Router()
const {externalData, home, getAll, getOne, update, deleteOne} = require('../controller/controller')


router.get('/externaldata', externalData)
router.get('/home', home)
router.get('/getall', getAll)
router.get('/getone/:id', getOne)
router.put('/update/:id', update)
router.delete('/delete/:id', deleteOne)

 
module.exports = router