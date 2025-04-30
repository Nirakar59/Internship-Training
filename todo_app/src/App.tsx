

import './App.css'
import AddTodo from './Components/AddTodo'
import TodoList from './Components/TodoList'
import { TodosProvider } from './Context/Todo'

function App() {


  return (
    <TodosProvider>
      <AddTodo />
      <TodoList />
    </TodosProvider>
  )
}

export default App
