import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import '../css/Todo.css'
import { TodoType } from "../type/Types";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../slice/TodoSlice";
import { useState } from "react";
 import { MdOutlineDownloadDone } from "react-icons/md";

 interface TodoProps{
  todoProps :TodoType
}

function Todo( {todoProps}:TodoProps) {
  const {id , content} = todoProps
  const [newTodo, setNewTodo ] = useState(content)
 
const dispatch=useDispatch()
const handleEtidTodo = ()=>{
const payload :TodoType={
id:id,
content:newTodo
}
dispatch(updateTodo(payload))
setEditable(false)

}
const [editable,setEditable]= useState<boolean>(false)
  const handleRemoveTodo = ()=>{
    dispatch(removeTodo(id))
  }
  return (
    <div>
      <div className="todo-parent">
        <div className="todo-text">
          {editable ? <input value={newTodo} type="text" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setNewTodo(e.target.value)}} />:<div>{content}</div>}
        </div>
       <div> 
        <IoIosRemoveCircle onClick={handleRemoveTodo}  className="todo-icon"/>
        { editable ? <MdOutlineDownloadDone onClick={handleEtidTodo} className="todo-icon"/>:<FaEdit onClick={()=>setEditable(true)} className="todo-icon" />}
        </div>
      </div>
    </div>
  )
}

export default Todo
