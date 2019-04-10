var mysql = require(“mysql”);
var connection = mysql.createConnection({
 host: “localhost”,
 port: 8889,
 user: “root”,
 password: “root”,
 database: “friendfinder_db”
});
//connect to mysql, otherwise throw error
connection.connect(function(err) {
 if (err) {
   console.error(“error connecting: ” + err.stack);
   return;
 }
 console.log(“connected as id ” + connection.threadId);
});
module.exports = function(app) {
 app.get(“/api/profile”, function(req, res) {
   connection.query(“SELECT * FROM profiles”, function(err, result) {
     if (err) throw err;
     res.json(result);
   });
 });
};