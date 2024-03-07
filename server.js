// Import the Express.js module
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a route handler for the root path
app.set('trust proxy', 2);
app.get('/', (req, res) => {
  res.send('Hello, world!');
});



app.get('/ip', (request, response) => response.send(request.ip));


// Define a port number for the server to listen on
const PORT = process.env.PORT || 2000;

// Start the server and listen for incoming requests on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});