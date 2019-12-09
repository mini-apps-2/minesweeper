const express = require('express')
const app = express()
const parser = require('body-parser')
const path = require('path')
const { connection } = require('../db/db.js')

app.use(express.static(path.join(__dirname, '../dist')))
app.use(parser.json())

app.post('/scores', (req, res) => {
  console.log(req.body.difficulty, req.body.score)
  connection.query('INSERT INTO scores (scores, difficulty) VALUES(?, ?)', [req.body.score, req.body.difficulty], err => {
    if (err) {
      console.error(err)
      res.sendStatus(400)
    } else res.sendStatus(201)
  })
})

app.listen(3000, err => {
  if (err) console.log(err);
  else console.log('Listening on port 3000');
})