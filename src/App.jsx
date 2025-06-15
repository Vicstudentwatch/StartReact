import Person from "./components/Person"
import Product from "./components/Product"

const App = () => {
  return (
    <div>
         <Person name="John" age={12}/>
         <Product name="Laptop" price={999.99}/>

    </div>
    
  )
}

export default App