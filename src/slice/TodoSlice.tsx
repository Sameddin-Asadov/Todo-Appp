import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoInitialState, TodoType } from '../type/Types'


const initialState: TodoInitialState ={
    todos:[]
}


export const TodoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        createTodo:(state :TodoInitialState , action : PayloadAction<TodoType>) =>{
            state.todos = [ ...state.todos , action.payload]
        },
        removeTodo:(state:TodoInitialState ,  action: PayloadAction<number>)=>{

          state.todos =  [...state.todos.filter((todo:TodoType)=> todo.id !== action.payload) ]
        },
        updateTodo:(state:TodoInitialState, action :PayloadAction<TodoType>)=>{
            state.todos = [...state.todos.map((todo :TodoType)=>
                todo.id !==action.payload.id ? todo  : action.payload
            )]
        }

    }
})


export const { createTodo , removeTodo,updateTodo} = TodoSlice.actions

export default TodoSlice.reducer
