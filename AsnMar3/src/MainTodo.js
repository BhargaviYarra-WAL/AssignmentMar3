import { useReducer } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./Todo.List";
import TodoReducer from "./Todo.Reducer";
import TodoContext from "./TodoContext";
const MainTodo=()=>{
    const initialValue= [{ item: "Reading ", status: "Complete " }]
    const [state,dispatch]=useReducer(TodoReducer,initialValue);
    const todos={state,dispatch}
    return(
        <div>
        <TodoContext.Provider value={todos}>
            <TodoForm/>
            <TodoList/>
        </TodoContext.Provider>
        </div>
    )
}
export default MainTodo;