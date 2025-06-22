import UpdateProfile from "./components/UpdateProfile"
import UserProvider from "./components/UserContext"
import UserProfile from "./components/UserProfile"



const App = () => {
  return (
    <div>
      <UserProvider>
        <UserProfile/>
        <UpdateProfile/>
      </UserProvider>
    </div>
    
  )
}

export default App