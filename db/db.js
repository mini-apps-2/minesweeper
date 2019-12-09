const mysql = require('mysql')
const { password } = require('./mysql_config.js')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: password,
  database: 'minesweeper'
})

connection.connect()

exports.connection = connection