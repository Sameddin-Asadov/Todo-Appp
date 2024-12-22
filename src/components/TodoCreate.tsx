import { useDispatch } from 'react-redux'
import '../css/TodoCreate.css'
import { useState } from 'react'
import { createTodo } from '../slice/TodoSlice'
import { TodoType } from '../type/Types'

function TodoCreate() {

  const dispatch = useDispatch()
  const [newTodo, setNewTodo]= useState<string>('')
const addListNewTodo =()=>{
  if(newTodo.trim().length ==0){
    alert("Zehmet olmasa bir eded todo girin")
    return
  }
  
    const payload: TodoType= {
      id: Math.floor(Math.random() * 99999999),
      content:newTodo
    }
    dispatch(createTodo(payload))
  setNewTodo("")
}

  return (
    <div>
      <div className='todo-create-parent'>
        <input 
        value={newTodo} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setNewTodo(e.target.value)}
          placeholder='Bir todo elave edin' className='todo-input' type="text" />
        <button onClick={addListNewTodo} className="todo-create-button">Elave et </button>
      </div>
    </div>
  )
}

export default TodoCreate
