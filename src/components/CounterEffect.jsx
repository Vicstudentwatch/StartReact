import { useEffect,useState } from "react"

const CounterEffect = () => {
    const [count,setCount] = useState(0)
    useEffect(()=>console.log("UseEffect Fired"),[ count])
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}

export default CounterEffect