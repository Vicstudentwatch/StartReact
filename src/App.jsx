import Greeting from "./components/Greeting"
import UserStatus from "./components/UserStatus"
import Weather from "./components/Weather"

const App = () => {
  return (
    <div>
      <UserStatus isLoggedIn={true} isAdmin={true}/>
      <Greeting timeOfDay='morning'/>
      <Weather temp={15}/>  
    </div>
    
  )
}

export default App