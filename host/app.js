const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()

const port = 80

app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('combined'))
app.listen(port)

console.log(`Host app listening on ${port}`)
