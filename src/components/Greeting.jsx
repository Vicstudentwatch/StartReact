const Greeting = ({timeOfDay}) => {
  return (
    <div><p>Good {timeOfDay === 'morning' ? ( "Morning") : 
         timeOfDay === 'afternoon' ? ("Afternoon") : 
         "Evening"}
         !</p>
    </div>
  )
}

export default Greeting