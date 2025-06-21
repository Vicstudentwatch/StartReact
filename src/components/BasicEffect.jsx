import { useEffect} from "react"

const BasicEffect = () => {
    useEffect(()=>{console.log("useEffct fired");})
  return (
    <div>
        <h1>UseEffect</h1>
    </div>
  )
}

export default BasicEffect