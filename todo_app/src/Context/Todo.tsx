import React, { createContext, useEffect, useState } from 'react';

export type TypeTodoContext= {
  todos:string[], setTodos:React.Dispatch<React.SetStateAction<string[]>>, addTodo:(newTodo: string)=> void,HandleRemoveTodo: (nameOfTheToDoToRemove: string) => void
}

export const TodosContext = createContext<TypeTodoContext |null>(null)

 export const TodosProvider = ({ children }: { children: React.ReactNode }) => {

  const[todos, setTodos] = useState<string[]>([])

function addTodo (newTodo:string){

  console.log(newTodo, typeof newTodo)
  if(!newTodo || typeof newTodo !== "string") return

  setTodos((prev)=> {
    const newTodos = [newTodo,...prev]
    localStorage.setItem("todos", JSON.stringify(newTodos))
    return newTodos
  })
}
function HandleRemoveTodo(nameOfTheToDoToRemove : string){
  if(!nameOfTheToDoToRemove || typeof nameOfTheToDoToRemove !== "string") return

  const removeTodo = todos.filter((t)=> t !== nameOfTheToDoToRemove)

  localStorage.setItem("todos",JSON.stringify(removeTodo))
  setTodos(removeTodo)


}
  const values = {
    todos,
    setTodos,
    addTodo,
    HandleRemoveTodo
  }

  useEffect(()=>{
    const defaultTodos = localStorage.getItem("todos")
    const jsonDataTodo = defaultTodos && JSON.parse(defaultTodos)
    if(jsonDataTodo) setTodos(jsonDataTodo)
  },[])

  return (
    <TodosContext.Provider value={values}>
      {children}
    </TodosContext.Provider>
  );
};
