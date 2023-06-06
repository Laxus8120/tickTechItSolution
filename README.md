# Express API for User Management

This is a Node.js application that uses the Express framework to create RESTful API endpoints for creating, reading, updating, and deleting user data. 

## API Endpoints

The API endpoints are:

- `POST /users`: Create a new user record in the in-memory database. The user record should include a unique identifier (UUID), a username, an age, and a list of hobbies.
- `GET /users`: Retrieve all user records from the in-memory database.
- `GET /users/:id`: Retrieve a single user record from the in-memory database by ID.
- `PUT /users/:id`: Update a single user record in the in-memory database by ID.
- `DELETE /users/:id`: Delete a single user record from the in-memory database by ID.

The application uses the `uuid` library to generate unique identifiers for each user record, and the `validate` function from the same library to validate UUIDs passed in the request parameters.

The application also uses the `body-parser` library to parse JSON request bodies, and the `dotenv` library to load environment variables from a `.env` file.

## How, to make req in aws instance 

> ***NOTE:*** First copy the public url and paste it in your browser and then make req.

* To `create` a new user, you need to send a `POST` request to the /users endpoint with the required data in the request body.
```js
curl -X POST -H "Content-Type: application/json" -d '{"username":"john", "age":25, "hobbies":["reading", "gaming"]}' http://<your-public-ip>:3005/users
```

* To `retrieve all users`, you need to send a `GET` request to the /users endpoint.
```js
curl -X GET http://<your-public-ip>:3005/users
```

* To `retrieve a specific user by ID`, you need to send a `GET` request to the /users/:id endpoint, replacing :id with the actual ID of the user.
```js
curl -X GET http://<your-public-ip>:<userId>
```

* To `update an existing user`, you need to send a `PUT` request to the /users/:id endpoint, replacing :id with the actual ID of the user.
```js
curl -X PUT -H "Content-Type: application/json" -d '{"username":"new_username", "age":30, "hobbies":["running", "swimming"]}' http://<your-public-ip>:3005/users/<user-id>
```

* To `delete` a user, you need to send a `DELETE` request to the /users/:id endpoint, replacing :id with the actual ID of the user.
```js
curl -X DELETE http://<your-public-ip>:3005/users/<user-id>
```
> Replace `<your-public-ip>` with the actual public IP address of your AWS instance. `<user-id>` should be replaced with the ID of the user you want to retrieve, update, or delete.

## Setup

To set up the project, follow these steps:

1. Clone the repository.
2. Run `npm install` to install the required dependencies.
3. Create a `.env` file in the root directory of the project and add the following environment variable: `PORT=<port-number>`. Replace `<port-number>` with the desired port number for the server.
4. Run `npm start` to start the server.

## Usage

Once the server is running, you can use a tool like Postman to test the API endpoints. 

- To create a new user, send a `POST` request to `/users` with a JSON body containing the user data.
- To retrieve all users, send a `GET` request to `/users`.
- To retrieve a single user by ID, send a `GET` request to `/users/:id`, replacing `:id` with the user's UUID.
- To update a user by ID, send a `PUT` request to `/users/:id`, replacing `:id` with the user's UUID and including a JSON body containing the updated user data.
- To delete a user by ID, send a `DELETE` request to `/users/:id`, replacing `:id` with the user's UUID.

The response for each endpoint will include a JSON object containing either the user data or an error message.

## Contributing

If you find a bug or would like to suggest an improvement, please open an issue or submit a pull request.

