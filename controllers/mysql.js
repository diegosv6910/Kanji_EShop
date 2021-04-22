var mysql      = require('mysql');
var connection = {
  host     : process.env.HOST,
  user     : process.env.BDUSER,
  password : process.env.BDPASSWORD,
  database : process.env.BDNAME
};
 
// connection.connect();
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
 
// connection.end();

module.exports = connection;