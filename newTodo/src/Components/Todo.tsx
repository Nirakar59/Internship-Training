import React, { useReducer } from 'react'
interface DataType {id: number|string, task: string, isCompleted: boolean}
// interface ActionType {}

interface NewTodo extends Pick<DataType,"task">{
    type: "new"
}
interface DeleteTodo extends Pick<DataType,"id">{
    type: "delete"
}
interface Toggle extends Pick<DataType, "id">{
    type : "markComplete"
}

const handleTodo = (state: DataType[],action: NewTodo | DeleteTodo | Toggle) =>{

    if(action.type==='new'){
        const newTodo: DataType = {
            id: crypto.randomUUID(),
            task: action.task,
            isCompleted: false
        }
        localStorage.setItem("todo",JSON.stringify(newTodo))
        return [...state,newTodo]
    }
    if(action.type==='delete'){
        const newArray = state.filter((todo)=>todo.id !== action.id)
        return newArray
    }
    if(action.type==='markComplete'){
        return state.map((todo)=> todo.id == action.id ? {...todo, isCompleted: !todo.isCompleted}: todo)
    }
    throw Error("Invalid Type")
}
const Todo = () => {

    const handleSubmit= (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const todo = formData.get('text')
        if(!todo) return
        dispatch({
        type:'new',
        task: String(todo)
        })

    }
    const[state, dispatch] = useReducer(handleTodo,[])

  return (
    <>
    <div>Todo</div>
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="addTodo"></label>
            <input
             type="text"
             id='addTodo'
             name='text'
              />
            <button type="submit">Add</button>
        </form>
    </div>
    <div className="list">
        {state.map(({id,isCompleted,task})=>{
            return(               
                <div key={id}>
                <div>{task}</div>
                <div>{isCompleted} </div>
                </div>               
            )
        })}
    </div>
    </>
  )
}

export default Todo