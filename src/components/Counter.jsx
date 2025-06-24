import { useReducer,useState } from "react";

const Counter = () => {
    const [val,setVal] = useState(0)
    const reducer = (state,action)=>{
    return action.type === "add" && {...state,count:state.count+Number(val)}
}

  const [state, dispatch] = useReducer(reducer, { count: 1 });
  const IncreaseByNumber = (e)=>{
    e.preventDefault();
    dispatch({type:"add"})
  }
  

  return <div>
    <h1>{state.count}</h1>
    <form onSubmit={IncreaseByNumber}>
        <input type="number" value={val} onChange={(e)=>setVal(e.target.value)}/>
        <button type="submit">Submit</button>
    </form>
    <p>{val}</p>
  </div>;
};

export default Counter;
