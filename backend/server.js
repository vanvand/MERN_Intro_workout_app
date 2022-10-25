require ("dotenv").config()

const express = require("express")

// express app
const app = express()

// global middleware to log path and method
// middleware = any code that executes between us getting a request on the server and us sending a response
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.get("/", (req, res) => {
    res.json({mssg: "Welcome to the app"})
})

// listen for requests
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})