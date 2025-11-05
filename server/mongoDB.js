const mongoose = require('mongoose')

const mongodb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB: UP")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {mongodb}