import { FormEvent, useContext } from 'react'
import { TodosContext } from '../Context/Todo'

const AddTodo = () => {
  const todoContxt = useContext(TodosContext)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const newTodo = formData.get("newTodo")
    if (!todoContxt) return
    if (newTodo && typeof newTodo == "string") {
      todoContxt.addTodo(newTodo)
    }
    e.currentTarget.reset()
  }
  return (
    <>
      <div>AddTodo</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="newTodo"
          placeholder='Enter todo'
        />
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default AddTodo