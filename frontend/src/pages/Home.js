import { useEffect, useState } from "react"
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"
import { useWorkoutsContext } from "../hooks/useWorkoutContext"

const Home = () => {

    // use global context instead of local state
    const { workouts, dispatch } = useWorkoutsContext()
    // const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch("http://localhost:4000/api/workouts")
            const json = await response.json() 

            if(response.ok) {
                dispatch({type: "SET_WORKOUTS", payload: json})
                // setWorkouts(json)
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
            <WorkoutForm />
        </div>
    )
}

export default Home