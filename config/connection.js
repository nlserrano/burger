// Require mysql
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "uc13jynhmkss3nve.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "yc05q4lv3sywu915",
    password: "crzr50ako6ht8rho",
    database: "tauq21xbtowjposn"
  });
};

connection.connect();
module.exports = connection;