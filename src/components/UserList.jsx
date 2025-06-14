//create 3 users with id name and age
const users = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Smith', age: 25 },
  { id: 3, name: 'Alice Johnson', age: 28 }
];

const UserList = () => {
  return (
    <div>
        <h1>User List</h1>
        <ol>
            {users.map(({id,name,age})=>(
                <li key={id}>
                    {name} - {age} years old {Math.floor(Math.random().toFixed(2)*10)}
                </li>
            ))}
        </ol>
    </div>
  )
}

export default UserList