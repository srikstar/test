const mongoose = require('mongoose')

const user = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    roles:{
        type:String,
        enum: ['admin', 'partnes', 'users'],
        required:true,
        default:'users'
    }
},{Timestamp:true})

const User = mongoose.model('Users', user)
module.exports = User