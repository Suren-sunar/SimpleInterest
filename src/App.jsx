import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [Principle, setPrinciple] = useState(0)
  const [Time, setTime] = useState(0)
  const [Rate, setRate] = useState(0)
  const [Calculate, setCalculate] = useState(0)
  const CalculateInterest = () =>{
    setCalculate(Principle*Time*Rate/100)

  }
  
  return (
    <>
   <div>
    <h1>Simple Interest</h1>
    <br />
    <label htmlFor="">Principle:</label>
    <input onChange={(Event) => setPrinciple(Event.target.value)} type="text" />
    <label htmlFor="">Time:</label>
    <input onChange={(Event) => setTime(Event.target.value)}type="text" />
    <label htmlFor="">Rate:</label>
    <input onChange={(Event) => setRate(Event.target.value)}type="text" />
    <br /> <br />
    <button onClick={CalculateInterest}>Calculate</button>
    <h4>Simple Interest is : {Calculate}</h4>
   </div>
    </>
  )
}

export default App
