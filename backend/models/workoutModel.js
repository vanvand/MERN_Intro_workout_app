const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  load: {
    type: Number,
    required: true
  }
}, { timestamps: true })

// Workout = model name 
// collection name will be created automatically via pluralizing model name >> "Workouts"
module.exports = mongoose.model('Workout', workoutSchema)