const express = require('express');
const uuid = require('uuid');
const { validate } = require('uuid');
const bodyParser = require('body-parser');
const dotenv  = require('dotenv');

dotenv.config();

const PORT  = process.env.PORT;
const app = express(); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const Users = [];

// todo : Creating new Users
app.post('/users', (req, res) => {

    // checking all the fields are present
  if (!req.body.username || !req.body.age || !req.body.hobbies) {
    return res.status(400).json({ 
      message : 'required fields are not present'
    });
  }
    // setting up the User
  const user = {
    id: uuid.v4(),
    username: req.body.username,
    age: req.body.age,
    hobbies: req.body.hobbies
  };
  // Updating Users array with user object 
  Users.push(user);
  return res.status(201).json(user); 
});

// todo: Getting All the user present in our Users
app.get('/users', (req, res) => {
  return res.status(200).json(Users);
});

// todo: Getting user with respect to ID
app.get('/users/:id', (req, res) => {
  const id = req.params.id;

  if (!validate(id)) {
    return res.status(400).json({
      message : 'not a valid uuid'
    });
  }

  const user = Users.find(user => user.id === id);

  if (!user) {
    return res.status(404).json({ error : `record with ${id} doesn't exist` });
  }

  return res.status(200).json({
    data : user
  });
});

// todo: Updating already present Users
app.put('/users/:id', (req, res) => {
  const id = req.params.id;

  if (!validate(id)) {
    return res.status(400).json({
      message : 'not a valid uuid'
    });
  }

  const user = Users.find(user => user.id === id);

  if (!user) {
    return res.status(404).json({ error : `record with ${id} doesn't exist` });
  }

  user.username = req.body.username;
  user.age = req.body.age;
  user.hobbies = req.body.hobbies;

  return res.status(200).json({
    data : user
  });
});

// todo: Deleting the User

app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
  
    // Validating uuid ID
    if (!validate(id)) {
      return res.status(400).json({
        message: 'Not a valid uuid'
      });
    }
  
    // Find the user with the specified ID
    const index = Users.findIndex(user => user.id === id);

    // If the user is not found, return a 404 response
    if (index === -1) {
      return res.status(404).json({ error: 'User not found' });
    }
    // Remove the user from the in-memory database
    Users.splice(index, 1);
    // Send a success response back to the client
    return res.status(204).send('Record found and deleted');
  });
  

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
