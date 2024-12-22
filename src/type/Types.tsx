export interface TodoInitialState{
    todos: TodoType[]
};


export interface TodoType{
    content:string,
    id:number
}