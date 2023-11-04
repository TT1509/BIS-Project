require("dotenv").config() // load .env variables
const path = require("path"); // Import the path module
const express = require("express") // import express
const morgan = require("morgan") //import morgan
const {log} = require("mercedlogger") // import mercedlogger's log function
const cors = require("cors") // import cors
const UserRouter = require("./controllers/User") //import User Routes
const TodoRouter = require("./controllers/Todo") // import Todo Routes

//DESTRUCTURE ENV VARIABLES WITH DEFAULT VALUES
const {PORT = 3000} = process.env

// Create Application Object
const app = express()

// GLOBAL MIDDLEWARE
app.use(cors()) // add cors headers
app.use(morgan("tiny")) // log the request for debugging
app.use(express.json()) // parse json bodies
app.use(express.static(path.join(__dirname, "public"), { "extensions": ["html", "htm", "js"] }));


// ROUTES AND ROUTES
app.get("/", (req, res) => {
    // Set the "Content-Type" header to indicate that this is a JavaScript file
    res.setHeader('Content-Type', 'text/javascript');
    // Send the HTML file as a response with the correct absolute path
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// app.get('/favicon.ico', (req, res) => {
//     res.status(204);
// });

app.use("/user", UserRouter) // send all "/user" requests to UserRouter for routing
app.use("/todos", TodoRouter) // send all "/todos" request to TodoROuter

// APP LISTENER
app.listen(PORT, () => log.green("SERVER STATUS", `Listening on port ${PORT}`))