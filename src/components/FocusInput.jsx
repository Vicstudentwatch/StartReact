import { useRef } from "react";

const FocusInput = () => {
  const inpElement = useRef(null);
  const focusOnTheInp = () => {
    inpElement.current.focus()
  }

  return <div>
    <input type="text" ref={inpElement}/>
    <button onClick={focusOnTheInp}>Focus</button>
  </div>;
};

export default FocusInput;
