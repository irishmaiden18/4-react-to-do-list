import { useState } from "react"
import ToDoDisplayList from "./components/ToDoDisplayList"
import ToDoForm from "./components/ToDoForm"

function App() {
  
  // set up list to track ToDos
  const [toDos, setToDos] = useState([])

  // function to add a ToDo
  const addToDo = (toDo) => {
    setToDos([...toDos, toDo])
  }

  return (
    <>
      <h1>To Do List</h1>
      <ToDoDisplayList toDos={toDos}/>
      <ToDoForm addToDo={addToDo}/>
    </>
  )
}

export default App
