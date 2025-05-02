const express  = require('express')
const jwt = require('jsonwebtoken')
const route = express.Router()
const {signUp,userLogin,userProduct,deleteProduct} = require('../controller/controller.js')
route.post('/signup',signUp)
route.post('/login',userLogin)
route.post('/product',userProduct)
route.delete('/delete/:id',deleteProduct)
module.exports = route;