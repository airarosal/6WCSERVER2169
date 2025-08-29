// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// serve static files
app.use(express.static('public'));

// basic routing
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// first API endpoint
app.get("/api/hello", function (req, res) {
  res.json({ greeting: 'hello API' });
});

// Timestamp Microservice API
app.get("/api/:date?", function (req, res) {
  let dateString = req.params.date;
  let date;

  // if no date provided, use current date
  if (!dateString) {
    date = new Date();
  } else {
    // if dateString is a number (unix timestamp)
    if (!isNaN(dateString)) {
      date = new Date(parseInt(dateString));
    } else {
      date = new Date(dateString);
    }
  }

  // check for invalid date
  if (date.toString() === "Invalid Date") {
    return res.json({ error: "Invalid Date" });
  }

  // return JSON with unix and utc
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

// listen on port
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
