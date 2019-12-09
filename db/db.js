const mysql = require('mysql')
const password = require('./mysql_config.js')

const connection = mysql.createConnection({
  host: 'localhost:3000',
  user: 'root',
  password: password
})

exports.connection = connection.connect(err => { if (err) console.log(err) })