const mongoose = require('mongoose');
require('dotenv').config()

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Database Connected Successfully')
    } catch (error) {
        console.log('Database Connection Error',error);
    }
}

module.exports = {db}