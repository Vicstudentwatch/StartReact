import { useReducer } from "react"
const reducer = (state,action) =>{
    switch(action.type){
        case "increment":
            return {count:state.count+1}
        case "decrement":
            return {count:state.count-1}
    }
}

const CounterReducer = () => {
    const [state,dispatch] = useReducer(reducer,{count:0})
  return (
    <p>
    <button onClick={()=>dispatch({type:"decrement"})}>-</button>
    <span>{state.count}</span>
    <button onClick={()=>dispatch({type:"increment"})}>+</button>
    </p>
    )}

export default CounterReducer