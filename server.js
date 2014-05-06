var express = require('express');
var logfmt = require("logfmt");
var app = express();

app.use(
        "/", //the URL throught which you want to access to you static content
        express.static(__dirname) //where your static content is located in your filesystem
    );
app.use(logfmt.requestLogger());

var port = Number(process.env.PORT || 80);
app.listen(port, function() {
  console.log("Listening on " + port);
}); //the port you want to use