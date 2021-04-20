var mysql      = require('mysql');
var connection = {
  host     : 'bciw0ve1qvovsg6tfx0c-mysql.services.clever-cloud.com',
  user     : 'unfalqzdimz2a7qo',
  password : 'tCQRkxFgquDQyl1TPyrS',
  database : 'bciw0ve1qvovsg6tfx0c'
};
 
// connection.connect();
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
 
// connection.end();

module.exports = connection;