## Backend OverView
This project is the backend structure of a Blog Application developed using:

Node.js\
Express.js\
MongoDB\
Mongoose

The backend provides APIs for:

User authentication\
Author operations\
Admin operations\
Common blog functionalities

It also supports:

JWT authentication\
File uploads\
Cloudinary integration\
Middleware protection\
Cookie handling
### Technologies Used
Node.js\
Express.js\
MongoDB\
Mongoose\
JWT Authentication\
Cloudinary\
Multer\
dotenv\
cookie-parser\
CORS
### Project Structure
BackEnd\
│\
├── APIs\
│   ├── AdminAPI.js\
│   ├── AuthorAPI.js\
│   ├── CommonAPI.js\
│   └── UserAPI.js\
│\
├── config\
│   ├── cloudinary.js\
│   ├── cloudinaryUpload.js\
│   └── multer.js\
│\
├── middlewares\
│   └── verifyToken.js\
│\
├── models\
│   ├── ArticleModel.js\
│   └── UserModel.js\
│\
├── .env\
├── package.json\
├── package-lock.json\
├── server.js\
└── README.md
# Installation Steps

## Step 1: Install Dependencies

```bash
npm install express mongoose mongodb cloudinary multer dotenv cookie-parser jsonwebtoken cors
```

---

## Step 2: Create `.env` File

```env
PORT=port_number

DBURL=your_mongodb_connection

SECRET_KEY=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret
```

---
## Step 3: To get cloudinary
```bash
https://cloudinary.com/

login in this and create a cloudinary you will get name,key,api_secret copy and connect to backend
```
## Step 4: Start the Server
```bash
node server.js
```

# To Deploy 
### Use Render for backend
### Steps To Deploy
#### Step 1: Push the file in the vs code to git
#### Step 2: connect git to render and select the project
#### Step 3: Add Environment Variables (.env file)
```bash
PORT=port_number

DBURL=your_mongodb_connection( Cluster Connection Using Atlas)

SECRET_KEY=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret
```
#### Step 4: Root Directory : Your Backend File
#### Step 5: Select Instance Type : Free
#### Step 6: Build Command: npm install
#### Step 7 : Start Command : npm start
#### Step 8 : Click on deploy
