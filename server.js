var express = require("express");

var app = express();
var PORT = 4000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// var express = require("express");
// var bodyParser = require("body-parser");
// var path = require("path");

// var app = express();
// var port = process.env.PORT || 8080

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static("app/public"));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
   });

