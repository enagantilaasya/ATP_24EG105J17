# OVERVIEW

## Topics Covered In This Directory

### Backend REST API Project
A Backend REST API Project is an application that handles data processing, storage, and communication between the client and the server through APIs. It follows REST (Representational State Transfer) principles to perform operations like creating, reading, updating, and deleting data.

### Express.js
Express.js is a lightweight and fast web framework for Node.js used to build web servers and APIs. It simplifies routing, middleware handling, and server-side development.

### MongoDB
MongoDB is a NoSQL database that stores data in flexible JSON-like documents. It is widely used for handling large amounts of unstructured or semi-structured data.

### Mongoose
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides schemas, validation, and easier interaction with MongoDB databases.

### REST API
REST API is a set of rules that allows applications to communicate over HTTP using methods such as `GET`, `POST`, `PUT`, and `DELETE`.

### CRUD Operations
CRUD stands for Create, Read, Update, and Delete. These are the basic operations performed in database-driven applications.

### Routing
Routing is the process of defining application endpoints and handling client requests based on URLs and HTTP methods.

### Middleware
Middleware functions are functions that execute during the request-response cycle in Express.js. They are used for tasks like authentication, validation, logging, and error handling.

### Database Connection
Database connection refers to establishing communication between the backend server and the database to store and retrieve data.
#### It provides REST APIs for:
User Management\
Product Management\
User Authentication using JWT\
Protected Routes using Middleware
#### The project follows CRUD operations:
Create\
Read\
Update\
Delete
#### Technologies Used
Node.js\
Express.js\
MongoDB\
Mongoose\
JWT\
bcryptjs\
Cookie Parser Middleware
### Project Structure
project/\
│\
├── APIs/\
│   ├── UserApi.js\
│   └── ProductApi.js\
│\
├── models/\
│   ├── UserModel.js\
│   └── ProductModel.js\
│\
├── middlewares/\
│   └── verifyToken.js\
│\
├── auth.js\
├── server.js\
├── package.json\
└── README.md
### How to Run the Project
Step 1: Install Dependencies(Technologies)\
Step 2: Run The Program\
nodemon Server.js\
the server on:\
http://localhost:8903
