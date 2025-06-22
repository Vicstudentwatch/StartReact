import { createContext, useState} from "react";
export const UserContext = createContext()

const UserProvider = ({children}) => {
  
  const [name,setName] = useState("John")
  
  return (
    <UserContext.Provider value={{name,setName}}>
      {children}
    </UserContext.Provider>
  )
}


export default UserProvider