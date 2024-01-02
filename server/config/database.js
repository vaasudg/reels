const mongoose = require('mongoose')
const { MONGOURL } = process.env

mongoose.connect(MONGOURL)
const connectDB = () => mongoose.connection
connectDB().on('error', console.error.bind(console, 'MongoDB connection error:'))
connectDB().once('open', () => {
  console.log('Connected to MongoDB...~')
})

module.exports = { connectDB }
