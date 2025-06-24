import { useRef, useState,useEffect } from "react";

const Timer = () => {
  const [timerState, setTimerState] = useState(0);
  const display = useRef();
  useEffect(()=>{
    display.current = setInterval(()=>{setTimerState(prev =>prev+1);},1000)
    
  },[])
  
  

  return (
    <div>
      <h1>Timer</h1>
      <div>{timerState}</div>
      <button onClick={()=>setTimerState(timerState+1)}>increase</button>
      <button onClick={()=>clearInterval(display.current)}>stop</button>
    </div>
  );
};

export default Timer;
