import React , {useState} from 'react'

const containerStyle = {
    textAlign: 'center',
    margin: '50px',
};

const inputStyle = {
    marginRight: '20px',
};

const buttonStyle = {
    backgroundColor: 'yellow',
    color: 'black',
    padding: '15px 20px',
    textAlign: 'center',
    display: 'inline-block',
    fontSize: '20px',
    margin: '6px 8px',
};

const toDoListStyle = {
    listStyleType: 'none',
    padding: '0',
};

const toDoItemStyle = {
    margin: '20px',
    padding: '10px',
    border: '1px solid #ccc',
};


function App() {
    const [toDo, setToDo] = useState([])
    const [newToDos, setNewToDos] = useState('')

    const addTodo = () => {
        if (newToDos !== '') {
            setNewToDos([...toDo , newToDos])
            setNewToDos('')
        }
    }
    return (
        <div style={containerStyle}>
            <h1>Todo App</h1>
            <div>
                <input
                    type="text"
                    value={newToDos}
                    onChange={(e) => setNewToDos(e.target.value)}
                    style={inputStyle}
                />
                <button onClick={addTodo} style={buttonStyle}>
                    Добавить задачу
                </button>
            </div>
            <ul style={toDoListStyle}>
                {toDo.map((toDo, index) => (
                    <li key={index} style={toDoItemStyle}>
                        {toDo}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App