const express = require('express')
const app = express()
const fs = require('fs')

const fileName = './lorem.txt'

const errorHandler = err => console.log(err)
const dataHandler = data => console.log(data.toString())
fs.readFileSync(fileName, (err, data) => {
 if (err) errorHandler(err)
 dataHandler(data)
})

app.get('/', (req, res) => {
 res.send('Hello Node JS')
})

console.log("I'm learning NodeJS")

const PORT = 3000
app.listen(PORT, () => console.log(`Node server running on PORT:${PORT}`))