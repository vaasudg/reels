const express = require('express')
const path = require('path')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
require('dotenv').config()

const { connectDB } = require('./config/database.js')

// status: 429,
//        statusText: 'Too Many Requests',
const { NODE_ENV, CLIENTURL, LOCALURL, PORT } = process.env

const app = express()
const port = NODE_ENV === 'production' ? PORT : 3001
const origin = () => (NODE_ENV === 'production' ? CLIENTURL : LOCALURL)

app.use(express.static(path.join(__dirname, '../build')))

app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded())
app.use(
  cors({
    origin: [origin],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  })
)

// Define API routes here

// Define a catch-all route to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'))
})

// Start the server
app.listen(port, () => {
  connectDB()
  console.log(`Server running on port ${port}`)
})
