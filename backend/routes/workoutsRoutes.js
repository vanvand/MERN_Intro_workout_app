const express = require("express")
const Workout = require("../models/workoutModel")

const router = express.Router()

// /api/workouts

// GET all workouts
router.get("/", (req, res) => {
    res.json({mssg: "GET all workouts"})
})

// GET a single workout
router.get("/:id", (req, res) => {
    res.json({mssg: "GET a single workout"})
})

// POST a new workout
router.post("/", async (req, res) => {
    const {title, load, reps} = req.body

    try {
        const workout = await Workout.create({title, load, reps}) // Workout.create() is async
        res.status(200).json(workout)
        
            // {
            //     "title": "Situps",
            //     "reps": 50,
            //     "load": 0,
            //     "_id": "63585108299d61859eec3a0e",
            //     "createdAt": "2022-10-25T21:11:36.620Z",
            //     "updatedAt": "2022-10-25T21:11:36.620Z",
            //     "__v": 0
            // }
            
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

// DELETE a new workout
router.delete("/:id", (req, res) => {
    res.json({mssg: "DELETE a new workout"})
})

// UPDATE a new workout
router.patch("/:id", (req, res) => {
    res.json({mssg: "UPDATE a new workout"})
})


module.exports = router