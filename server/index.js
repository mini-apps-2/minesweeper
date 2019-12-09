const express = require('express')
const app = express()
const parser = require('body-parser')
const path = require('path')
const { connection } = require('../db/db.js')

app.use(express.static(path.join(__dirname, '../dist')))
app.use(parser.json())

app.post('/scores', (req, res) => {
  connection.query('INSERT INTO scores (scores, difficulty) VALUES(?, ?)', [req.body.score, req.body.difficulty], err => {
    if (err) {
      console.error(err)
      res.sendStatus(400)
    } else res.sendStatus(201)
  })
})

app.get('/scores', (req, res) => {
  connection.query('SELECT scores, difficulty FROM scores', (err, data) => {
    if (err) {
      console.log(err)
      res.sendStatus(404)
    } else res.status(200).json(data)
  })
})

app.get('/scores/easy', (req, res) => {
  connection.query('SELECT scores, difficulty FROM scores WHERE difficulty="easy"', (err, data) => {
    if (err) {
      console.log(err)
      res.sendStatus(404)
    } else res.status(200).json(data)
  })
})

app.get('/scores/hard', (req, res) => {
  connection.query('SELECT scores, difficulty FROM scores WHERE difficulty="hard"', (err, data) => {
    if (err) {
      console.log(err)
      res.sendStatus(404)
    } else res.status(200).json(data)
  })
})

app.get('/scores/ludicrous', (req, res) => {
  connection.query('SELECT scores, difficulty FROM scores WHERE difficulty="ludicrous"', (err, data) => {
    if (err) {
      console.log(err)
      res.sendStatus(404)
    } else res.status(200).json(data)
  })
})

app.listen(3000, err => {
  if (err) console.log(err);
  else console.log('Listening on port 3000');
})