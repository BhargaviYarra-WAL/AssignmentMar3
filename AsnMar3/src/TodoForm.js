import { useContext, useState } from "react";
import TodoContext from "./TodoContext";
const TodoForm = () => {
    const [todo, setTodo] = useState("");
    const [status, setStatus] = useState("");
    const { dispatch } = useContext(TodoContext);
    return (
        <div className="TodoForm">
            <h2>Todo App</h2>
            <input type="text"
                name="todo"
                placeholder="Enter Todo"
                onInput={(e) => { setTodo(e.target.value) }} /><br />
            <select name="status" onChange={(e) => { setStatus(e.target.value) }}>
                <option value="compelete">Complete</option>
                <option value="incomplete">Incomplete</option>
            </select><br />
            <button className="btn1" onClick={() => { dispatch({ type: 'add', item: todo, status: status }) }}>Add Todo</button>

        </div>
    )
}
export default TodoForm;