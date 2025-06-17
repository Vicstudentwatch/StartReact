import ComponentOne from "./components/ComponentOne"
import ComponentTwo from "./components/ComponentTwo"
import { useState } from "react"

const App = () => {
  const [count, setCount] = useState(0)
  const countIncreament = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <ComponentOne count={count}/>
      <ComponentTwo countIncreament ={countIncreament}/>
    </div>
    
  )
}

export default App