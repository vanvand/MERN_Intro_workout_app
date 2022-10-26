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

## 4- Models & Schemas

create models/WorkoutModel.js with workoutSchema
create handler function for route: POST a new workout

## 5- Controllers

create backend/controllers/workoutController.js
import in workoutsRoutes.js

## 6- React Ap

$ npx create-react-app frontend
cd frontend
npm i react-router-dom

create pages/Home.js
create components/Navbar.js
bring in App.js

## 7- Fetching Data & list workouts

fetch BE data in Home.js with JS fetch API
! user CORS instead of proxy (proxy constantly make problems)

## 8- Form to create new workout

create WorkoutForm component

## 9- React Context

keep local workout state in sync with the database, e.g. after adding new workout
    options:
    > force re-fetch
    > update state locally via React Content (global state > update state by dispatch actions)

create context/WorkoutContext.js
and wrap App component in index.js with WorkoutsContextProvider component

create hooks/useWorkoutContext.js to create custom hook

use global context instead of local state in Home.js and dispatch "SET_WORKOUTS" action
dispatch "CREATE_WORKOUT" action in WorkoutForm.js

## 10- Delete Data

extend WorkoutDetails.js with delete button and onClick function
add DELETE_WORKOUT context type

## 11- Handling Error Responses

add conditions in workoutController
add emptyFields state and give styling for dynamically created classNames

