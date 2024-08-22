import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // hook -> where the count value use in throughout the UI , their it can update its value called hook concept
  let [count, setCount] = useState(15)

  //let count = 15;

  const addValue = () => {
    //count = count+1;
   // setCount(count + 1)
    //console.log("clicked", count)
      if (count == 20){
        setCount(count = 20)
      }
      else{
        setCount(count+1)
      }
        
  }

  const decreaseValue = () => {
    //count = count-1;
   // setCount(count - 1)
    //console.log("clicked", count)
    if (count > 0){
      setCount(count - 1)
    }
    else{
      setCount(count = 0)
    }

  }

  return (
    <>
      <h1>Hi, Good Afternoon!!!</h1>
      <h2>Count value: {count}</h2>

      <button onClick={addValue}>Add Value {count}</button>
      <br/>
      <button onClick={decreaseValue}>Subtract Value {count}</button>
      <p>footer: {count}</p>
    </>
  )
}

export default App
