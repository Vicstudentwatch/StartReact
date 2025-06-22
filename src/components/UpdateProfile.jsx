import { useContext, useState } from "react"
import { UserContext } from "./UserContext"


const UpdateProfile = () => {
    const {setName} = useContext(UserContext)
    const [user,setUser] = useState("")

    const changeName = (e)=>{
        e.preventDefault();
        setName(user);
        setUser("");
    }
  return (
    <form onSubmit={changeName}>
        <input type="text" value={user} onChange={(e)=>setUser(e.target.value)}/>
        <button type="submit">Change</button>
    </form>
  )
}

export default UpdateProfile