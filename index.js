const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Import CORS middleware
const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors());

// Route to serve JSON data from items.json
app.get('/items', (req, res) => {
  const filePath = path.join(__dirname, 'items.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
    } else {
      res.header('Content-Type', 'application/json');
      res.send(data);
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
