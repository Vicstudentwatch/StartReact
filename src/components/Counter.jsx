import React from 'react'

const Counter = () => {
    const [count, setCount] = React.useState(0)
    const increaseCount = () => {
        setCount(count + 1)
    }
  return (
    <>
    <h1>Current Count : {count}</h1>
    <button onClick={increaseCount}>Increase</button>
    </>
    
  )
}

export default Counter