const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()

const name = 'Fragment'
const port = 80

app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('combined'))
const server = app.listen(port, _ => {
  console.log(`${name} app listening on ${port}`)
})

process.on('SIGTERM', _ => {
  console.log(`Closing ${name} app`)
  server.close(_ => {
    process.exit(0)
  })
})
