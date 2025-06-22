import { useReducer } from "react"
const reducer = (state,action) =>{
    switch(action.type){
        case "increment":
            return {count:state.count+1}
    }
}

const CounterReducer = () => {
    const [state,dispatch] = useReducer(reducer,{count:0})
  return (
    <>
    <div>{state.count}</div>
    <button onClick={()=>dispatch({type:"increment"})}>+</button>
    </>
    )}

export default CounterReducer