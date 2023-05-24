var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  database: "firstdb",
  user: "root",
  password: "root123", //alter user 'root'@'localhost'identified with mysql_native_password by 'root123'; TYPE THIS IN SQL EDITOR TO SUCCESFLLY CONNECTED;
});
module.exports = connection;
