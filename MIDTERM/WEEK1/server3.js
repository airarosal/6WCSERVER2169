var express = require('express');
var app = express();

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
    console.log("My Profile");
    res.send('Aira Rosal | WD-301 | Holy Angel University | BSIT WebDev | Floridablanca Pampanga');
})

// This responds with a POST request for the homepage
app.post('/', function (req, res) {
    console.log("A POST request for the homepage is accessed.");
    res.send('Here is the POST Method');
})

// This responds  a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
    console.log("Got a GET request for /list_user");
    res.send('This is Page Listing');
})

// This responds  a GET request for abccd, abxcd, ab123cd, and so on
app.get('/ab*cd', function (req, res) {
    console.log("Got a GET request for /ab*cd");
    res.send('Pattern Match Page');
})

var server = app.listen(4000, function () {
    var host = server.address() .address
    var port = server.address() .port

    console.log("Example app listening at http://%s:%s", host, port)
})

