import Counter from "./components/Counter"
import CounterReducer from "./components/CounterReducer"

const App = () => {
  return (
    <div>
      <CounterReducer/>
      <Counter/>
    </div>
    
  )
}

export default App