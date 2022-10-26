import { createContext, useReducer } from 'react'

// create new context
export const WorkoutsContext = createContext()


export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
        // return a new value we want the state to be
      return { 
        workouts: action.payload 
      }
    case 'CREATE_WORKOUT':
      return { 
        // single new workout object, and rest of workout data
        workouts: [action.payload, ...state.workouts] 
      }
    default:
      return state
  }
}

// create component to provide context to our application component tree, so that components can use it 
export const WorkoutsContextProvider = ({ children }) => {
    // dispatch invoke workoutReducer function based on passed action.type
  const [state, dispatch] = useReducer(workoutsReducer, { 
    workouts: null // initial value for state
  })
  
  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      { children }
    </WorkoutsContext.Provider>
  )
}