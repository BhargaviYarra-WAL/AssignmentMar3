const TodoReducer=(state,action)=>{
    if (action.type == "add"){
        let TodoOb={
            item : action.item,
            status :action.status
        }
        return [...state,TodoOb]
    }
    if (action.type == "delete"){
        let newTodo = state.filter((val,index)=>{
            if(index==action.index){
                return false;
            }
            else{
                return true;
            }
        })
        return newTodo;
    }
    if(action.type == "clearall"){
        return [];
      }
}
export default TodoReducer;