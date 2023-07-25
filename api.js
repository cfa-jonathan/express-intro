const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/goodbye', function (req, res) {
  res.send('Goodbye for now')
})

app.listen(3000)