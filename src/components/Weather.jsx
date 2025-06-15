const Weather = ({temp}) => {
  return (
    <div>
        <h1>Weather Component</h1>
        {temp<15 ?(<p>Its cold</p>):temp>=15 && temp<25 ? (<p>Its warm</p>):(<p>Its hot</p>)}

    </div>
  )
}

export default Weather