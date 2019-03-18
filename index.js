// implement your API here

// moduel from node.js moduels imports and exports as before.

const express = require("express");

// computer where server going to run syntax below will make an express app with the express moduel

const server = express();
const port = 7000;

// Define the server next excute a function going to take
//request handler call back 2 arg req and res req object
// request object that come up to server and the response object sends a respone back
// to the resource requested
// so what this is doing is passing in the request and response objects to the funciton using node express

server.get("/", (req, res) => {
    res.send("Hello World");
});

// Last we need to setup a listen port and callback to run once excuted.

server.listen(7000, () => console.log(" Server Started Port 7000"));
