# MERN Introduction: Simple Workout App

## 1- Set-up

create and cd in backend folder
$ npm init -y
$ npm i express

create server.js file and set-up basic express server with route and middleware

run server:
$ node server.js
$ nodemon server.js
$ npm run dev (in backend/package.json add "dev": "nodemon server.js")

$ npm i dotenv
add .env file and variable for PORT
add .gitignore file


## 2- Express Router & API Routes

### API Endpoints

GET     /workouts       >> get all workouts docs
POST    /workouts       >> creates a new workout doc
GET     /workouts/:id   >> get a single workout doc
DELETE  /workouts/:id   >> delete a single workout
PATCH   /workouts/:id   >> update a single workout


create routes/workouts.js
and require created routes in server.js

## 3- MongoDB & Mongoose

create MongoDb project and database, get connection url for application and put in .env file
$ npm i mongoose
add connection config to server.js