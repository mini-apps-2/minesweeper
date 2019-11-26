const express = require('express')
const app = express()
const parser = require('body-parser')
const path = require('path')

app.use(express.static(path.join(__dirname, '../dist')))
app.use(parser.json())

app.listen(3000, err => {
  if (err) console.log(err);
  else console.log('Listening on port 3000');
})