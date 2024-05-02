// Importing the Express.js framework
const express = require('express');

// Creating an instance of the Express application
const app = express();

// Defining the port number for the server to listen to
const port = 3000;

// Serving static files from the 'public' directory
app.use(express.static('public'));

// Route for serving the index.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Route for handling GET requests to the '/addition' endpoint
app.get('/addition', (req, resp) => {
    // Check if query parameters num1 and num2 are valid
    if (!req.query.num1 || !req.query.num2) {
        // Sending a 400 Bad Request status with an error message
        resp.status(400).send(`<h1>Invalid numbers or numbers don't exist</h1>`);
    }
    // Parsing num1 and num2 from query parameters to float
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    // Performing addition operation and sending result back to client as HTML
    const result = num1 + num2;
    resp.send(`<h1>${result}</h1>`);
});

// Route for handling GET requests to the '/subtraction' endpoint
app.get('/subtraction', (req, resp) => {
    // Check if query parameters num1 and num2 are valid
    if (!req.query.num1 || !req.query.num2) {
        // Sending a 400 Bad Request status with an error message
        resp.status(400).send(`<h1>Invalid numbers or numbers don't exist</h1>`);
    }

    // Parsing num1 and num2 from query parameters to float
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    // Performing subtraction operation and sending result back to client as HTML
    const result = num1 - num2;
    resp.send(`<h1>${result}</h1>`);
});

// Route for handling GET requests to the '/multiplication' endpoint
app.get('/multiplication', (req, resp) => {
    // Check if query parameters num1 and num2 are valid
    if (!req.query.num1 || !req.query.num2) {
        // Sending a 400 Bad Request status with an error message
        resp.status(400).send(`<h1>Invalid numbers or numbers don't exist</h1>`);
    }

    // Parsing num1 and num2 from query parameters to float
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    // Performing multiplication operation and sending result back to client as HTML
    const result = num1 * num2;
    resp.send(`<h1>${result}</h1>`);
});

// Route for handling GET requests to the '/division' endpoint
app.get('/division', (req, resp) => {
    // Check if query parameters num1 and num2 are valid
    if (!req.query.num1 || !req.query.num2) {
        // Sending a 400 Bad Request status with an error message
        resp.status(400).send(`<h1>Invalid numbers or numbers don't exist</h1>`);
    }

    // Parsing num1 and num2 from query parameters to float
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    // Performing division operation and sending result back to client as HTML
    const result = num1 / num2;
    resp.send(`<h1>${result}</h1>`);
});

// Route for handling GET requests to the '/exponentiation' endpoint
app.get('/exponentiation', (req, resp) => {
    // Check if query parameters num1 and num2 are valid
    if (!req.query.num1 || !req.query.num2) {
        // Sending a 400 Bad Request status with an error message
        resp.status(400).send(`<h1>Invalid numbers or numbers don't exist</h1>`);
    }

    // Parsing num1 and num2 from query parameters to float
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    // Performing exponentiation operation and sending result back to client as HTML
    const result = num1 ** num2;
    resp.send(`<h1>${result}</h1>`);
});

// Route for handling GET requests to the '/squareRoot' endpoint
app.get('/squareRoot', (req, resp) => {
    // Check if query parameter num1 is valid
    if (!req.query.num1) {
        // Sending a 400 Bad Request status with an error message
        resp.status(400).send(`<h1>Invalid number or number doesn't exist</h1>`);
    }
    // Parsing num1 from query parameter to float
    const num1 = parseFloat(req.query.num1);

    // Performing square root operation and sending result back to client as HTML
    const result = Math.sqrt(num1);
    resp.send(`<h1>${result}</h1>`);
});

// Route for handling GET requests to the '/moduloOperation' endpoint
app.get('/moduloOperation', (req, resp) => {
    // Check if query parameters num1 and num2 are valid
    if (!req.query.num1 || !req.query.num2) {
        // Sending a 400 Bad Request status with an error message
        resp.status(400).send(`<h1>Invalid numbers or numbers don't exist</h1>`);
    }

    // Parsing num1 and num2 from query parameters to float
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    // Performing modulo operation and sending result back to client as HTML
    const result = num1 % num2;
    resp.send(`<h1>${result}</h1>`);
});

// Configures server to listen to the set port number then logs a message
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});