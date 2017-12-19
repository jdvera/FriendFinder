var express = require("express");
var path = require("path");

var htmlRoutes = require("./app/routing/htmlRoutes");
var apiRoutes = require("./app/routing/apiRoutes");

var app = express();
var PORT = process.env.PORT || 3003;

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

htmlRoutes(app);
apiRoutes(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});