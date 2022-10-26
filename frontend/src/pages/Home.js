import { useEffect, useState } from "react"
import WorkoutDetails from "../components/WorkoutDetails"

const Home = () => {

    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch("http://localhost:4000/api/workouts")
            const json = await response.json() 

            if(response.ok) {
                setWorkouts(json) // array of workout objects
            }
        }
        fetchWorkouts()
    }, [] // fire it only once when component first renders
    )

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map(workout => (
                    <WorkoutDetails workout={workout} key={workout._id} />
        ))}
      </div>
        </div>
    )
}

export default Home