import { useContext } from 'react'
import { TodosContext } from '../Context/Todo'

const TodoList = () => {
    const TodoContext = useContext(TodosContext)
    // console.log("---", TodoContext?.todos)
    function HandleRemoveOnClick(thingsToDelete: string) {
        TodoContext?.HandleRemoveTodo(thingsToDelete)
    }
    return (
        <div><h1>
            TodoList</h1>
            <div>
                {TodoContext?.todos?.map((todo, idx) => (
                    <div key={idx} onClick={() => HandleRemoveOnClick(todo)} className=''>
                        {todo}
                    </div>
                ))}</div>        </div>
    )
}

export default TodoList