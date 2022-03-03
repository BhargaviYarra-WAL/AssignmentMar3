import { useContext } from "react";
import TodoContext from "./TodoContext";
const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  return (
    <div className="TodoList">
      <h2>Todos List</h2>
      {
        state.map((val, index) => {
          return (
            <div className="table">
              <tr>
                <th>Todo</th>
                <th>Status</th>
                <th>Delete</th>
              </tr>
              <tr>
                <td>{val.item}</td>
                <td>{val.status}</td>
                <td><button onClick={() => { dispatch({ type: 'delete', index: index }) }}>Delete Todo</button></td>
              </tr>

            </div>
          )

        })
      }
      <button className="btn1" onClick={() => { dispatch({ type: 'clearall' }) }}>Clear All</button>
    </div>
  )
}
export default TodoList;