import { FaBeer } from 'react-icons/fa';
import { useState } from 'react';

const IconComponent = () => {
  let [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    console.log(`Icon clicked ${count + 1} times`);
  };

  return (
    <div>
        <h1 >Lets go for a <FaBeer onClick={()=>{alert("Icon Clicked")}} style={{color:"gold",fontSize:"50px"}}/></h1>
        <button style={{fontSize:"12px",padding:"18px",backgroundColor:"green"}} onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default IconComponent