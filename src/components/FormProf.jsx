import { useState } from "react";

const FormProf = () => {
  const [profiles, setProfiles] = useState([{name: "John Doe", age: 22}]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const addProfile = (e) => {
    e.preventDefault();
    name && age && setProfiles([...profiles, {name, age}]);
    setName("");
    setAge("");
  }

  return <div>
    <form onSubmit={addProfile}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" value={name} onChange={e=>{setName(e.target.value)}} /><br />

        <label htmlFor="age">Age</label>
        <input id="age" type="number" value={age} onChange={e=>{setAge(e.target.value)}} /><br />
        <button type="submit">Add Profile</button>
    </form>
    <h1>Profile List</h1>
    <ul>
        {profiles.map((p,i)=>(
            <li key={i}>
                <p>Name : {p.name} <strong>Age : {p.age}</strong></p>
            </li>
        ))}
    </ul>
  </div>;
};

export default FormProf;
