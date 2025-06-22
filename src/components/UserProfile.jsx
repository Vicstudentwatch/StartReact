import { useContext } from "react";
import UserProvider, { UserContext } from "./UserContext";

const UserProfile = () => {
  const {name} = useContext(UserContext);
  const {setName} = useContext(UserContext)
  
  
  return <h1>{name} </h1>
    
}

export default UserProfile