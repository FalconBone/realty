require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const fileUpload = require('express-fileupload')
const path = require('path')

const PORT = process.env.PORT

const app = express()
app.use(cors())
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`\nServer start on PORT ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start()