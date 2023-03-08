const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'Goofyboy41632!',
      database: 'company_db'
    },
    console.log(`Connection to company_db database info.`)
  );

  module.exports = db;