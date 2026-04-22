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

  const deleteToDo = (id) => {
    const updatedToDos = toDos.filter((task) => task.id !==id)

    setToDos(updatedToDos)
  }

  return (
    <>
      <h1>To Do List</h1>
      <ToDoDisplayList toDos={toDos} deleteToDo={deleteToDo}/>
      <ToDoForm addToDo={addToDo}/>
    </>
  )
}

export default App
