import { RootState } from "../app/store"
import { TodoType } from "../type/Types"
import Todo from "./Todo"
import { useSelector } from "react-redux"


function TodoLists() {

  const {todos} =useSelector((state:RootState)=>state.todo)

 
  return (
    <div>

      {todos && todos.map((todo: TodoType)=>(
           <Todo key={todo.id} todoProps={todo}/>
      ))}
     
    </div>
  )
}

export default TodoLists
