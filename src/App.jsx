import { useState } from "react"
import ToDoDisplayList from "./components/ToDoDisplayList"
import ToDoForm from "./components/ToDoForm"

function App() {
  
  // set up list to track ToDos
  const [toDos, setToDos] = useState([])

  const [displayUsername, setDisplayUsername] = useState("")

  // function to add a ToDo
  const addToDo = (toDo) => {
    setToDos([...toDos, toDo])
  }

  const deleteToDo = (id) => {
    const updatedToDos = toDos.filter((task) => task.id !==id)

    setToDos(updatedToDos)
  }

  const deleteCompletedToDos = () => {
    
    const updatedToDos = toDos.filter((task) => task.completed === false)
    setToDos(updatedToDos)
  }

  return (
    <>
      <h1>To Do List</h1>
      <ToDoDisplayList toDos={toDos} deleteToDo={deleteToDo} deleteCompletedToDos={deleteCompletedToDos} displayUsername={displayUsername}/>
      <ToDoForm addToDo={addToDo} displayUsername={displayUsername} setDisplayUsername={setDisplayUsername}/>
    </>
  )
}

export default App
