// import { useState } from 'react'
import './App.css'
// import counterStore from "./reducer/CounterReducer.js";
import { useDispatch, useSelector } from "react-redux"
import { increment, selectCount } from "./feature/counter/counterSlice.js";
import { setName, selectName} from "./feature/user/userSlice.js";

function App() {
    const dispatch = useDispatch()
    const count = useSelector(selectCount)
    const userName = useSelector(selectName)
  // const [count, setCount] = useState(0)

    // store.dispatch({ type: 'counter/increment' })
    // console.log(store.getState())

    // State: a counter value
    //const [counter, setCounter] = useState(0)

    // Action: code that causes an update to the state when something happens
    const incrementT = () => {
        //setCounter(prevCounter => prevCounter + 1)
        dispatch(increment())
        dispatch(setName(count))
        // counterStore.dispatch({ type: 'counter/increment' })
        // console.log(counterStore.getState())
    }

  return (
      <>
          <h1>Vite + React</h1>
          <h2>{userName}</h2>
          <div>
              Value: {count}
              <button onClick={incrementT}>Increment</button>
          </div>
      </>
  )
}

export default App
