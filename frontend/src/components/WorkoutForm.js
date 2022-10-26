import { useState } from 'react'
import { useWorkoutsContext } from "../hooks/useWorkoutContext"

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext()
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    // create dummy workout object that we send as body of request
    const workout = {title, load, reps}
    
    const response = await fetch('http://localhost:4000/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout), // turn workout object into JSON string
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // backend send us json back as defined in workoutController
    const json = await response.json()

    if (!response.ok) {
      // json.error from backend standard mongoose error
      setError(json.error)
      // custom error message
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      // in case of previous error
      setError(null)
      setEmptyFields([])

      // reset form
      setTitle('')
      setLoad('')
      setReps('')
      
      console.log('new workout added:', json)

      dispatch({type: "CREATE_WORKOUT", payload: json})
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Workout</h3>

      <label>Exercise Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
        // create className dynamically
        className={emptyFields.includes("title") ? "error" : ""}
      />

      <label>Load (in kg):</label>
      <input 
        type="number" 
        onChange={(e) => setLoad(e.target.value)} 
        value={load}
        className={emptyFields.includes("load") ? "error" : ""}
      />

      <label>Number of Reps:</label>
      <input 
        type="number" 
        onChange={(e) => setReps(e.target.value)} 
        value={reps} 
        className={emptyFields.includes("reps") ? "error" : ""}
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm