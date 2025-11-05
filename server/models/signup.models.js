const mongoose = require('mongoose')

const user = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    roles:{
        type:String,
        enum: ['admin', 'partners', 'users'],
        required:true,
        default:'users'
    }
},{timestamp:true})

const User = mongoose.model('Users', user)
module.exports = User