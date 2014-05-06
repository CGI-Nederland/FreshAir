var express = require('express');
var app = express();
app.use(
        "/", //the URL throught which you want to access to you static content
        express.static(__dirname) //where your static content is located in your filesystem
    );

app.listen(80); //the port you want to use