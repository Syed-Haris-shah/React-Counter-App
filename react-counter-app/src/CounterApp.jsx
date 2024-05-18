import { useState } from 'react'
import './App.css'


// create CounterApp function and array destucturing 
const CounterApp = () =>{
  const [counter, setCounter] = useState(0);

  // create increamentHandler function to increament the counter value by 1 
  const increamentHandler = () => {
    setCounter(counter+1)
  };

  // create decreamentHandler function to decreament the counter value by 1
  const deceamentHandler = () => {
    // setCounter(counter-1)

    // if(counter == 0){
    //   setCounter(0)
    // }
    if(counter > 0){
      setCounter(counter-1)
    }else{
      setCounter(0)
    }
  };

  // create resetHandler function to reset the counter value = 0
  const resetHandler = () => {
    setCounter(0)
  };

  // const buttonStyle = {backgroundColor:'gray', color:'yellow'}

  return (


    <>
    
      <h1>Counter: {counter}</h1>

      <button onClick={increamentHandler}>Increament</button>
      <button onClick={deceamentHandler}>Decreament</button>
      <button onClick={resetHandler}>Reset</button>

    </>

  )
}

export default CounterApp
