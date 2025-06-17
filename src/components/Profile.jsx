import React from 'react'
import { useState } from 'react'

const Profile = () => {
    const [profileDetail,setProfileDetail] = useState({name:'John',age:30})
    const  update = e => {
        e.preventDefault()
        const name = document.querySelector('#name').value;
        const age = document.querySelector('#age').value;
        if(name && age) {
            setProfileDetail({name, age});
            document.querySelector('#name').value = '';
            document.querySelector('#age').value = '';
        }
    }

  return (
    <div>
        <h1>Profile Component</h1>
        <p>Name: {profileDetail.name}</p>
        <p>Age: {profileDetail.age}</p>

        <form action="#">
            <h2>Update Profile</h2>
            <label htmlFor='name'>Name: </label><input id='name' type="text" placeholder={profileDetail.name} />
            <label htmlFor='age'>age: </label><input id='age' type="text" placeholder={profileDetail.age}/>
            <button type="submit" onClick={update}>Update</button>
        </form>
    </div>
  )
}

export default Profile