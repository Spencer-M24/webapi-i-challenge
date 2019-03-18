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


server.get('/api/users', (req, res) => {
    db
      .find()
      .then(users => {
        res.json(users);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: 'Error Please check again' });
      });
  });


  server.get('/api/users/:id', (req, res) => {
    const { id } = req.params;
  

    db.findById(id)
      .then(user => {
        if (user) {
          res.json(user);
        } else {
          res
            .status(404)
            .json({ message: 'This user does not exist.' });
        }
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: 'The user information cant be found.' });
      });
  });

  server.post('/api/users', (req, res) => {
    const user = req.body
    db
      .insert(user)
      .then(users => {
           res.status(201).json(users)
      })
     .catch(err => {
        res.status(400).json({ message: "Please Give name information to user" })
     })
})

server.delete('/api/users/:id', (req, res) => {
    const id = req.params.id
    db
      .remove(id)
      .then(users => {
        if (users) {
            res.json(users)
        } else {
            res.status(404).json({ message: "This user does not exist." })
        }
     })
     .catch(err => {
        res.status(500).json({ error: "Has been deleted Something wrong" })
    })
})


// Last we need to setup a listen port and callback to run once excuted.

server.listen(7000, () => console.log(" Server Started Port 7000"));
