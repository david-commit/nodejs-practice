const express = require('express')
const app = express()
const fs = require('fs')
const morgan = require('morgan')
const postRoutes = require('./routes/post')

const fileName = './lorem.txt'
const errorHandler = err => console.log(err)
const dataHandler = data => console.log(data.toString())
fs.readFileSync(fileName, (err, data) => {
 if (err) errorHandler(err)
 dataHandler(data)
})

// Custom Middleware
const customMiddleware = (req, res, next) => {
 console.log('Middleware😂')
 next()
}

// Middleware
app.use(morgan('dev'))
app.use('/', customMiddleware, postRoutes)

console.log("I'm learning NodeJS")

const PORT = 8080
app.listen(PORT, () => console.log(`Node server running on PORT:${PORT}`))