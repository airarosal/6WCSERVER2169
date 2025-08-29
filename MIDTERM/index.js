// index.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for FCC testing
app.use(cors({ optionsSuccessStatus: 200 }));

// Serve static files
app.use(express.static('public'));

// Homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Simple hello API
app.get('/api/hello', (req, res) => {
  res.json({ greeting: 'hello API' });
});

// Request Header Parser API
app.get('/api/whoami', (req, res) => {
  const ipaddress = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];

  res.json({
    ipaddress,
    language,
    software
  });
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
