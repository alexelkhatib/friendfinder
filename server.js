// Dependencies //
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");


// Port Designation //
var app = express();
var PORT = process.env.PORT || 3000;

// Express app data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Server begins to listen //
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// Requires and sets HTML & API routes
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);