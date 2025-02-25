const mongoose = require('mongoose')

const connectDB = ()=>{
    mongoose.connect('mongodb://localhost:27017/symbol').then(()=>{
        console.log("DB connected")
    })
}
module.exports = connectDB