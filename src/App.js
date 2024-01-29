import React, {useState} from 'react'
import Todo from "./components/todo";
import backgroundWallpaper from "./assets/images/img.png"
import "./App.css"

const containerStyle = {
    textAlign: 'center',
    backgroundColor: "rgba(120, 80, 90, 0.2)",
    height: "600px",
    width: "1000px",
    margin: "0 auto",
    backdropFilter: "blur(4px)",
    borderRadius: "20px",
    overflow: "hidden"
};

const inputStyle = {
    marginRight: '20px',
    padding: '15px 20px',
    fontSize: '15px',
    borderRadius: "10px",
    border: "2px solid pink",
    outline: "none"
};

const buttonStyle = {
    backgroundColor: 'pink',
    color: '#fff',
    padding: '15px 20px',
    textAlign: 'center',
    display: 'inline-block',
    fontSize: '15px',
    margin: '6px 8px',
    borderRadius: "10px",
    border: "2px solid white",
    fontWeight: "900",
    textTransform: "uppercase"
};

const toDoListStyle = {
    listStyleType: 'none',
    padding: '0',
    listStylePosition: "inside",
    overflowY: "auto"
};

const background = {
    backgroundImage: `url(${backgroundWallpaper})`,
    height: "100vh",
    backgroundSize: "cover",
    padding: "50px 0 0",
    display: "flex",
    alignItems: "center"
}

function App() {
    const [toDo, setToDo] = useState([])
    const [newToDos, setNewToDos] = useState('')

    const addTodo = () => {
        if (newToDos !== '') {
            setToDo([...toDo, newToDos])
            setNewToDos('')
        }
    }

    const deleteTodo = (id) => {
        setToDo(toDo.filter((todo, index) => index !== id))
    }

    return (
        <div style={background}>
            <div style={containerStyle}>
                <h1 style={{color: "#fff", backgroundColor: "rgba(104, 69, 82, 0.5)", padding: "10px"}}>Todo App</h1>
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
                <div className="todosBlock">
                    <ul style={toDoListStyle}>
                        {toDo.map((item, index) => (<Todo key={index}  id={index} todo={item} deleteTodo={deleteTodo}/>))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default App