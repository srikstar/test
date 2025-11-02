const express = require('express')
const mongoDB = require('./mongoDB')
const dotenv = require('dotenv')
const cors = require('cors')
const userRouter = require('./routes/user.routes.js')

dotenv.config()
const app = express()
mongoDB.mongodb()
app.use(express.json())
app.use(cors({
    origin:'http://localhost:5173'
}))

app.use('/api/auth', userRouter)

app.listen(9000, () => {
    console.log('Server : UP')
})