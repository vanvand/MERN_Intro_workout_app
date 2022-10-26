require ("dotenv").config()
const cors = require('cors')


const express = require("express")
const mongoose = require("mongoose")
const workoutRoutes = require("./routes/workoutsRoutes")

// express app
const app = express()

app.use(cors())

// app.use() add a new middleware to the app > whenever request hits backend, express will execute functions passed to app.use() in order. 
// express.json() parses incoming JSON requests and puts the parsed data in req.body.
app.use(express.json())
// global middleware to log path and HTTP method
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use("/api/workouts", workoutRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then( () => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`connected to db & listening on port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })

