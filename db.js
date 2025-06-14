const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Gulshan@123',
  database: 'Blog_db',
});

connection.connect(err => {
  if (err) throw err;
  console.log(' MySQL connetion succesfully');
});

module.exports = connection;
