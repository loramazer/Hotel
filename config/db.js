const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'laura122',
  database: 'hotel'
});

module.exports = db;

