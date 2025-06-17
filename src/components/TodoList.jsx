import React from 'react'

const TodoList = () => {
    const [todos, setTodos] = React.useState([])
    const addTodo = e => {
        e.preventDefault();
        document.querySelector(`.inp`).value && setTodos([...todos, document.querySelector(`.inp`).value]);
        document.querySelector(`.inp`).value = '';

    }

  return (
    <div>
        <p>TodoList</p>
        {todos.length > 0 ? <ul>
            {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </ul> : <p>No todos available</p>}
        <form action="#">
            <input type="text" className='inp'/>
            <button type="submit" onClick={addTodo}>Add Todo</button>
        </form>
    </div>
  )
}

export default TodoList